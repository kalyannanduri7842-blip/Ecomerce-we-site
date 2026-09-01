const { useState, useEffect, useCallback, createContext, useContext } = React;
const API = 'http://localhost:4000/api';

async function api(path, options = {}) {
  const token = localStorage.getItem('nm_token');
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
  if (token) headers.Authorization = 'Bearer ' + token;
  const res = await fetch(API + path, { ...options, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

const AuthCtx = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem('nm_token');
    if (token) {
      api('/auth/me').then(u => setUser(u)).catch(() => localStorage.removeItem('nm_token')).finally(() => setLoading(false));
    } else setLoading(false);
  }, []);
  const login = async (email, password) => {
    const data = await api('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
    localStorage.setItem('nm_token', data.token);
    setUser(data.user);
    return data.user;
  };
  const register = async (name, email, password, phone) => {
    const data = await api('/auth/register', { method: 'POST', body: JSON.stringify({ name, email, password, phone }) });
    localStorage.setItem('nm_token', data.token);
    setUser(data.user);
    return data.user;
  };
  const logout = () => { localStorage.removeItem('nm_token'); setUser(null); };
  return React.createElement(AuthCtx.Provider, { value: { user, loading, login, register, logout } }, children);
}
function useAuth() { return useContext(AuthCtx); }

const CartCtx = createContext(null);
function CartProvider({ children }) {
  const { user } = useAuth();
  const [cart, setCart] = useState({ items: [], subtotal: 0, itemCount: 0 });
  const refresh = useCallback(async () => {
    if (!user) { setCart({ items: [], subtotal: 0, itemCount: 0 }); return; }
    try { setCart(await api('/cart')); } catch (e) {}
  }, [user]);
  useEffect(() => { refresh(); }, [refresh]);
  const addToCart = async (productId, quantity = 1, size, color) => {
    const data = await api('/cart/items', { method: 'POST', body: JSON.stringify({ productId, quantity, size, color }) });
    setCart(data); return data;
  };
  const updateQty = async (productId, quantity) => {
    const data = await api('/cart/items/' + productId, { method: 'PUT', body: JSON.stringify({ quantity }) });
    setCart(data);
  };
  const removeItem = async (productId) => {
    const data = await api('/cart/items/' + productId, { method: 'DELETE' });
    setCart(data);
  };
  return React.createElement(CartCtx.Provider, { value: { cart, refresh, addToCart, updateQty, removeItem } }, children);
}
function useCart() { return useContext(CartCtx); }

function useRoute() {
  const [path, setPath] = useState(window.location.pathname + window.location.search);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname + window.location.search);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  const navigate = (to) => { window.history.pushState({}, '', to); setPath(to); window.scrollTo(0, 0); };
  return { path: path.split('?')[0], query: new URLSearchParams(path.split('?')[1] || ''), navigate };
}

function Header({ navigate, path }) {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const [q, setQ] = useState('');
  if (path.startsWith('/admin')) return null;
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="logo" onClick={e => { e.preventDefault(); navigate('/'); }}>NexMart</a>
        <nav className="nav">
          {['men','women','kids','groceries'].map(c => (
            <a key={c} href={'/'+c} className={path === '/'+c ? 'active' : ''} onClick={e => { e.preventDefault(); navigate('/'+c); }}>{c.charAt(0).toUpperCase()+c.slice(1)}</a>
          ))}
        </nav>
        <form className="search-box" onSubmit={e => { e.preventDefault(); if (q.trim()) navigate('/?search='+encodeURIComponent(q.trim())); }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input className="input" placeholder="Search products..." value={q} onChange={e => setQ(e.target.value)} />
        </form>
        <div className="header-actions">
          <button className="icon-btn" onClick={() => navigate('/wishlist')} title="Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <button className="icon-btn" onClick={() => navigate('/cart')} title="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            {cart.itemCount > 0 && <span className="count">{cart.itemCount}</span>}
          </button>
          {user ? (
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <button className="btn btn-sm btn-outline" onClick={() => navigate('/orders')}>Orders</button>
              {user.role === 'admin' && <button className="btn btn-sm" onClick={() => navigate('/admin')}>Admin</button>}
              <button className="btn btn-sm btn-outline" onClick={logout}>Logout</button>
            </div>
          ) : (
            <button className="btn btn-sm" onClick={() => navigate('/login')}>Login</button>
          )}
        </div>
      </div>
    </header>
  );
}

function ProductCard({ product, navigate, onAdd }) {
  const price = product.discountPrice != null ? product.discountPrice : product.price;
  return (
    <div className="product-card">
      <a href={'/product/'+product.slug} onClick={e => { e.preventDefault(); navigate('/product/'+product.slug); }}>
        <div className="img-wrap">
          <img src={product.images && product.images[0] ? product.images[0] : 'https://picsum.photos/300'} alt={product.name} loading="lazy"
            onError={e => { e.target.src = 'https://picsum.photos/seed/'+product.sku+'/600/600'; }} />
        </div>
      </a>
      <div className="body">
        <a href={'/product/'+product.slug} onClick={e => { e.preventDefault(); navigate('/product/'+product.slug); }}>
          <div className="name">{product.name}</div>
        </a>
        <div style={{fontSize:13,color:'var(--text-muted)',marginBottom:4}}>★ {product.rating} ({product.reviewCount})</div>
        <div>
          <span className="price">₹{price}</span>
          {product.discountPrice != null && <span className="old-price">₹{product.price}</span>}
        </div>
        {product.isOutOfStock ? (
          <span className="badge badge-red" style={{marginTop:8}}>Out of Stock</span>
        ) : (
          <div className="actions">
            <button className="btn btn-sm" style={{flex:1}} onClick={() => onAdd(product)}>Add to Cart</button>
          </div>
        )}
      </div>
    </div>
  );
}

function ProductList({ category, search, navigate }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();
  const { addToCart } = useCart();
  useEffect(() => {
    setLoading(true); setError('');
    let path = '/products?';
    if (category) path += 'category='+category+'&';
    if (search) path += 'search='+encodeURIComponent(search)+'&';
    api(path).then(d => setProducts(d.products)).catch(e => setError(e.message)).finally(() => setLoading(false));
  }, [category, search]);
  const handleAdd = async (p) => {
    if (!user) { navigate('/login'); return; }
    try { await addToCart(p.id, 1); alert('Added to cart'); } catch (e) { alert(e.message); }
  };
  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error-box">{error}</div>;
  if (!products.length) return <div className="empty">No products found.</div>;
  return (
    <div className="product-grid">
      {products.map(p => <ProductCard key={p.id} product={p} navigate={navigate} onAdd={handleAdd} />)}
    </div>
  );
}

function HomePage({ navigate, query }) {
  const search = query.get('search');
  return (
    <div className="page"><div className="container">
      {!search && (
        <div style={{background:'var(--bg-muted)',borderRadius:8,padding:'40px 24px',marginBottom:32,textAlign:'center'}}>
          <h1 style={{fontSize:28,fontWeight:600,marginBottom:8}}>Welcome to NexMart</h1>
          <p style={{color:'var(--text-muted)',marginBottom:20}}>Fashion, essentials and groceries — delivered simply.</p>
          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <button className="btn" onClick={() => navigate('/men')}>Shop Men</button>
            <button className="btn btn-outline" onClick={() => navigate('/women')}>Shop Women</button>
            <button className="btn btn-outline" onClick={() => navigate('/kids')}>Shop Kids</button>
            <button className="btn btn-outline" onClick={() => navigate('/groceries')}>Groceries</button>
          </div>
        </div>
      )}
      <h2 className="section-title">{search ? 'Search: "'+search+'"' : 'Featured Products'}</h2>
      <ProductList search={search} navigate={navigate} />
    </div></div>
  );
}

function CategoryPage({ category, navigate }) {
  const titles = { men: 'Men', women: 'Women', kids: 'Kids', groceries: 'Groceries' };
  return (
    <div className="page"><div className="container">
      <h1 className="page-title">{titles[category] || category}</h1>
      <ProductList category={category} navigate={navigate} />
    </div></div>
  );
}

function ProductDetail({ slug, navigate }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [qty, setQty] = useState(1);
  const { user } = useAuth();
  const { addToCart } = useCart();
  useEffect(() => {
    setLoading(true);
    api('/products/'+slug).then(p => {
      setProduct(p);
      if (p.sizes && p.sizes.length) setSize(p.sizes[0]);
      if (p.colors && p.colors.length) setColor(p.colors[0]);
    }).catch(e => setError(e.message)).finally(() => setLoading(false));
  }, [slug]);
  const handleAdd = async () => {
    if (!user) { navigate('/login'); return; }
    try { await addToCart(product.id, qty, size, color); alert('Added to cart'); } catch (e) { alert(e.message); }
  };
  const handleWish = async () => {
    if (!user) { navigate('/login'); return; }
    try { await api('/wishlist/'+product.id, { method: 'POST' }); alert('Added to wishlist'); } catch (e) { alert(e.message); }
  };
  if (loading) return <div className="loading">Loading...</div>;
  if (error || !product) return <div className="container page"><div className="error-box">{error || 'Not found'}</div></div>;
  const price = product.discountPrice != null ? product.discountPrice : product.price;
  return (
    <div className="page"><div className="container">
      <div className="detail-grid">
        <div className="detail-img">
          <img src={product.images && product.images[0]} alt={product.name}
            onError={e => { e.target.src = 'https://picsum.photos/seed/'+product.sku+'/600/600'; }} />
        </div>
        <div>
          <h1 style={{fontSize:22,fontWeight:600,marginBottom:8}}>{product.name}</h1>
          <div style={{color:'var(--text-muted)',marginBottom:12}}>★ {product.rating} · {product.reviewCount} reviews · SKU: {product.sku}</div>
          <div style={{marginBottom:16}}>
            <span style={{fontSize:24,fontWeight:600}}>₹{price}</span>
            {product.discountPrice != null && <span className="old-price" style={{fontSize:16}}>₹{product.price}</span>}
          </div>
          <p style={{color:'var(--text-muted)',marginBottom:16}}>{product.description}</p>
          {product.material && <p style={{fontSize:13,marginBottom:4}}><strong>Material:</strong> {product.material}</p>}
          {product.brand && <p style={{fontSize:13,marginBottom:4}}><strong>Brand:</strong> {product.brand}</p>}
          {product.weight && <p style={{fontSize:13,marginBottom:4}}><strong>Weight:</strong> {product.weight}</p>}
          {product.expiryDate && <p style={{fontSize:13,marginBottom:12}}><strong>Expiry:</strong> {product.expiryDate}</p>}
          {product.sizes && product.sizes.length > 0 && (
            <div><label>Size</label>
              <div className="variant-row">
                {product.sizes.map(s => <button key={s} className={'variant-btn'+(size===s?' active':'')} onClick={() => setSize(s)}>{s}</button>)}
              </div>
            </div>
          )}
          {product.colors && product.colors.length > 0 && (
            <div><label>Color</label>
              <div className="variant-row">
                {product.colors.map(c => <button key={c} className={'variant-btn'+(color===c?' active':'')} onClick={() => setColor(c)}>{c}</button>)}
              </div>
            </div>
          )}
          <div style={{margin:'16px 0'}}>
            <label>Quantity</label>
            <div className="qty-control">
              <button onClick={() => setQty(Math.max(1, qty-1))}>-</button>
              <span>{qty}</span>
              <button onClick={() => setQty(Math.min(product.availableStock, qty+1))}>+</button>
              <span style={{fontSize:13,color:'var(--text-muted)',marginLeft:8}}>{product.availableStock} available</span>
            </div>
          </div>
          {product.isOutOfStock ? (
            <span className="badge badge-red">Out of Stock</span>
          ) : (
            <div style={{display:'flex',gap:10,marginTop:16}}>
              <button className="btn" onClick={handleAdd}>Add to Cart</button>
              <button className="btn btn-outline" onClick={handleWish}>Wishlist</button>
            </div>
          )}
        </div>
      </div>
    </div></div>
  );
}

function CartPage({ navigate }) {
  const { user } = useAuth();
  const { cart, updateQty, removeItem } = useCart();
  if (!user) return <div className="page container"><div className="empty">Please <a href="/login" onClick={e=>{e.preventDefault();navigate('/login');}}>login</a> to view cart.</div></div>;
  if (!cart.items.length) return <div className="page container"><div className="empty">Your cart is empty. <button className="btn btn-sm" onClick={()=>navigate('/')}>Continue shopping</button></div></div>;
  return (
    <div className="page"><div className="container">
      <h1 className="page-title">Shopping Cart</h1>
      <table className="cart-table">
        <thead><tr><th>Product</th><th>Price</th><th>Qty</th><th>Total</th><th></th></tr></thead>
        <tbody>
          {cart.items.map(item => (
            <tr key={item.productId}>
              <td>
                <div style={{display:'flex',gap:12,alignItems:'center'}}>
                  <img src={item.image} alt="" style={{width:56,height:56,objectFit:'cover',borderRadius:4}} />
                  <div>
                    <a href={'/product/'+item.slug} onClick={e=>{e.preventDefault();navigate('/product/'+item.slug);}}>{item.name}</a>
                    {(item.size||item.color) && <div style={{fontSize:12,color:'var(--text-muted)'}}>{[item.size,item.color].filter(Boolean).join(' / ')}</div>}
                  </div>
                </div>
              </td>
              <td>₹{item.price}</td>
              <td>
                <div className="qty-control">
                  <button onClick={() => updateQty(item.productId, item.quantity-1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQty(item.productId, item.quantity+1)}>+</button>
                </div>
              </td>
              <td>₹{item.lineTotal}</td>
              <td><button className="btn btn-sm btn-outline" onClick={() => removeItem(item.productId)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{marginTop:24,display:'flex',justifyContent:'flex-end'}}>
        <div style={{minWidth:260}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}><span>Subtotal</span><strong>₹{cart.subtotal}</strong></div>
          <p style={{fontSize:13,color:'var(--text-muted)',marginBottom:16}}>Shipping calculated at checkout</p>
          <button className="btn" style={{width:'100%'}} onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
        </div>
      </div>
    </div></div>
  );
}

function CheckoutPage({ navigate }) {
  const { user } = useAuth();
  const { cart, refresh } = useCart();
  const [address, setAddress] = useState({ fullName: (user&&user.name)||'', phone:'', addressLine:'', city:'', state:'', postalCode:'', country:'India' });
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => { if (!user) navigate('/login'); }, [user]);
  if (!user) return null;
  if (!cart.items.length && !order) return <div className="page container"><div className="empty">Cart is empty</div></div>;
  const shipping = cart.subtotal >= 999 ? 0 : 49;
  const total = cart.subtotal + shipping;
  const placeOrder = async () => {
    setLoading(true); setError('');
    try {
      const data = await api('/orders', { method: 'POST', body: JSON.stringify({ address, paymentMethod: 'mock' }) });
      setOrder(data.order); setStep(3); refresh();
    } catch (e) { setError(e.message); }
    finally { setLoading(false); }
  };
  if (step === 3 && order) {
    return (
      <div className="page container" style={{textAlign:'center',maxWidth:480}}>
        <h1 className="page-title">Order Confirmed</h1>
        <p style={{marginBottom:8}}>Thank you! Your order <strong>#{order.id}</strong> has been placed.</p>
        <p style={{color:'var(--text-muted)',marginBottom:24}}>Total paid: ₹{order.total} (Test / Mock payment)</p>
        <button className="btn" onClick={() => navigate('/orders/'+order.id)}>View Order</button>
        <button className="btn btn-outline" style={{marginLeft:8}} onClick={() => navigate('/')}>Continue Shopping</button>
      </div>
    );
  }
  return (
    <div className="page"><div className="container" style={{maxWidth:720}}>
      <h1 className="page-title">Checkout</h1>
      {error && <div className="error-box">{error}</div>}
      <div className="tabs">
        <button className={step===1?'active':''} onClick={()=>setStep(1)}>1. Address</button>
        <button className={step===2?'active':''} onClick={()=>step>=1&&setStep(2)}>2. Summary & Payment</button>
      </div>
      {step===1 && (
        <div>
          <div className="form-group"><label>Full Name</label><input className="input" value={address.fullName} onChange={e=>setAddress({...address,fullName:e.target.value})} /></div>
          <div className="form-group"><label>Phone</label><input className="input" value={address.phone} onChange={e=>setAddress({...address,phone:e.target.value})} /></div>
          <div className="form-group"><label>Address</label><textarea className="input" rows={2} value={address.addressLine} onChange={e=>setAddress({...address,addressLine:e.target.value})} /></div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
            <div className="form-group"><label>City</label><input className="input" value={address.city} onChange={e=>setAddress({...address,city:e.target.value})} /></div>
            <div className="form-group"><label>State</label><input className="input" value={address.state} onChange={e=>setAddress({...address,state:e.target.value})} /></div>
            <div className="form-group"><label>Postal Code</label><input className="input" value={address.postalCode} onChange={e=>setAddress({...address,postalCode:e.target.value})} /></div>
            <div className="form-group"><label>Country</label><input className="input" value={address.country} onChange={e=>setAddress({...address,country:e.target.value})} /></div>
          </div>
          <button className="btn" onClick={() => {
            if (!address.fullName||!address.phone||!address.addressLine||!address.city||!address.state||!address.postalCode) { setError('Please fill all address fields'); return; }
            setError(''); setStep(2);
          }}>Continue</button>
        </div>
      )}
      {step===2 && (
        <div>
          <h3 className="section-title">Order Summary</h3>
          {cart.items.map(i => (
            <div key={i.productId} style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid var(--border)'}}>
              <span>{i.name} × {i.quantity}</span><span>₹{i.lineTotal}</span>
            </div>
          ))}
          <div style={{marginTop:12}}>
            <div style={{display:'flex',justifyContent:'space-between'}}><span>Subtotal</span><span>₹{cart.subtotal}</span></div>
            <div style={{display:'flex',justifyContent:'space-between'}}><span>Shipping</span><span>{shipping===0?'FREE':'₹'+shipping}</span></div>
            <div style={{display:'flex',justifyContent:'space-between',fontWeight:600,marginTop:8}}><span>Total</span><span>₹{total}</span></div>
          </div>
          <div style={{marginTop:24,padding:16,background:'var(--bg-muted)',borderRadius:6}}>
            <p style={{fontWeight:500,marginBottom:8}}>Payment</p>
            <p style={{fontSize:13,color:'var(--text-muted)'}}>This is a development mock payment. No real charge. Clicking “Pay & Place Order” creates a real order with status paid.</p>
          </div>
          <div style={{marginTop:16,display:'flex',gap:8}}>
            <button className="btn btn-outline" onClick={()=>setStep(1)}>Back</button>
            <button className="btn" disabled={loading} onClick={placeOrder}>{loading?'Processing...':'Pay & Place Order (Mock)'}</button>
          </div>
        </div>
      )}
    </div></div>
  );
}

function OrdersPage({ navigate }) {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => { if (!user) return; api('/orders/my').then(d=>setOrders(d.orders)).finally(()=>setLoading(false)); }, [user]);
  if (!user) return <div className="page container"><div className="empty">Please login</div></div>;
  if (loading) return <div className="loading">Loading...</div>;
  return (
    <div className="page"><div className="container">
      <h1 className="page-title">My Orders</h1>
      {!orders.length ? <div className="empty">No orders yet</div> : (
        <table className="data-table">
          <thead><tr><th>Order</th><th>Date</th><th>Items</th><th>Total</th><th>Status</th><th></th></tr></thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.id}>
                <td>#{o.id}</td>
                <td>{new Date(o.createdAt).toLocaleDateString()}</td>
                <td>{o.itemCount}</td>
                <td>₹{o.total}</td>
                <td><span className="badge badge-gray">{o.status}</span></td>
                <td><button className="btn btn-sm btn-outline" onClick={()=>navigate('/orders/'+o.id)}>View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div></div>
  );
}

function OrderDetailPage({ id, navigate }) {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => { api('/orders/my/'+id).then(setOrder).catch(()=>{}).finally(()=>setLoading(false)); }, [id]);
  if (loading) return <div className="loading">Loading...</div>;
  if (!order) return <div className="page container"><div className="error-box">Order not found</div></div>;
  return (
    <div className="page"><div className="container" style={{maxWidth:720}}>
      <h1 className="page-title">Order #{order.id}</h1>
      <p style={{marginBottom:16}}>Placed on {new Date(order.createdAt).toLocaleString()} · <span className="badge badge-gray">{order.status}</span> · {order.paymentStatus}</p>
      <h3 className="section-title">Items</h3>
      {order.items.map((i, idx) => (
        <div key={idx} style={{display:'flex',gap:12,padding:'10px 0',borderBottom:'1px solid var(--border)'}}>
          <img src={i.image} alt="" style={{width:48,height:48,objectFit:'cover',borderRadius:4}} />
          <div style={{flex:1}}><div>{i.name}</div><div style={{fontSize:13,color:'var(--text-muted)'}}>Qty {i.quantity} · ₹{i.price}</div></div>
          <div>₹{i.lineTotal}</div>
        </div>
      ))}
      <div style={{marginTop:16,textAlign:'right'}}>
        <div>Subtotal: ₹{order.subtotal}</div>
        <div>Shipping: ₹{order.shipping}</div>
        <div style={{fontWeight:600}}>Total: ₹{order.total}</div>
      </div>
      <h3 className="section-title" style={{marginTop:24}}>Delivery Address</h3>
      <p>{order.address.fullName}<br/>{order.address.addressLine}<br/>{order.address.city}, {order.address.state} {order.address.postalCode}<br/>{order.address.phone}</p>
      <button className="btn btn-outline" style={{marginTop:16}} onClick={()=>navigate('/orders')}>Back to Orders</button>
    </div></div>
  );
}

function WishlistPage({ navigate }) {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const load = () => api('/wishlist').then(d=>setItems(d.items)).finally(()=>setLoading(false));
  useEffect(() => { if (user) load(); else setLoading(false); }, [user]);
  if (!user) return <div className="page container"><div className="empty">Please login to view wishlist</div></div>;
  if (loading) return <div className="loading">Loading...</div>;
  return (
    <div className="page"><div className="container">
      <h1 className="page-title">Wishlist</h1>
      {!items.length ? <div className="empty">No items in wishlist</div> : (
        <div className="product-grid">
          {items.map(p => (
            <div key={p.id} className="product-card">
              <a href={'/product/'+p.slug} onClick={e=>{e.preventDefault();navigate('/product/'+p.slug);}}>
                <div className="img-wrap"><img src={p.image} alt={p.name} /></div>
              </a>
              <div className="body">
                <div className="name">{p.name}</div>
                <div className="price">₹{p.discountPrice||p.price}</div>
                <div className="actions">
                  <button className="btn btn-sm" onClick={async()=>{try{await addToCart(p.id);alert('Added to cart');}catch(e){alert(e.message);}}}>Add to Cart</button>
                  <button className="btn btn-sm btn-outline" onClick={async()=>{await api('/wishlist/'+p.id,{method:'DELETE'});load();}}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div></div>
  );
}

function LoginPage({ navigate }) {
  const { login, register, user } = useAuth();
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name:'', email:'', password:'', phone:'' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => { if (user) navigate(user.role==='admin'?'/admin':'/'); }, [user]);
  const submit = async (e) => {
    e.preventDefault(); setError(''); setLoading(true);
    try {
      if (mode==='login') await login(form.email, form.password);
      else await register(form.name, form.email, form.password, form.phone);
    } catch (err) { setError(err.message); }
    finally { setLoading(false); }
  };
  return (
    <div className="page"><div className="container" style={{maxWidth:400}}>
      <h1 className="page-title">{mode==='login'?'Login':'Create Account'}</h1>
      {error && <div className="error-box">{error}</div>}
      <form onSubmit={submit}>
        {mode==='register' && <div className="form-group"><label>Name</label><input className="input" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></div>}
        <div className="form-group"><label>Email</label><input className="input" type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></div>
        <div className="form-group"><label>Password</label><input className="input" type="password" required minLength={6} value={form.password} onChange={e=>setForm({...form,password:e.target.value})} /></div>
        {mode==='register' && <div className="form-group"><label>Phone</label><input className="input" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} /></div>}
        <button className="btn" style={{width:'100%'}} disabled={loading}>{loading?'Please wait...':mode==='login'?'Login':'Register'}</button>
      </form>
      <p style={{marginTop:16,textAlign:'center',fontSize:14}}>
        {mode==='login' ? <>No account? <a href="#" onClick={e=>{e.preventDefault();setMode('register');}}>Register</a></> : <>Have an account? <a href="#" onClick={e=>{e.preventDefault();setMode('login');}}>Login</a></>}
      </p>
      <div style={{marginTop:24,padding:12,background:'var(--bg-muted)',borderRadius:6,fontSize:13}}>
        <strong>Demo accounts</strong><br/>
        Customer: customer@nexmart.com / customer123<br/>
        Admin: admin@nexmart.com / admin123
      </div>
    </div></div>
  );
}

function AdminLayout({ children, navigate, path }) {
  const { user, logout } = useAuth();
  const links = [['/admin','Dashboard'],['/admin/products','Products'],['/admin/inventory','Inventory'],['/admin/orders','Orders'],['/admin/customers','Customers'],['/admin/sales','Sales']];
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="logo">NexMart Admin</div>
        {links.map(([to,label]) => (
          <a key={to} href={to} className={path===to||(to!=='/admin'&&path.startsWith(to))?'active':''}
            onClick={e=>{e.preventDefault();navigate(to);}}>{label}</a>
        ))}
        <a href="/" onClick={e=>{e.preventDefault();navigate('/');}} style={{marginTop:24}}>← Storefront</a>
      </aside>
      <div className="admin-main">
        <div className="admin-header">
          <span style={{fontWeight:500}}>{user && user.name}</span>
          <button className="btn btn-sm btn-outline" onClick={()=>{logout();navigate('/');}}>Logout</button>
        </div>
        <div className="admin-content">{children}</div>
      </div>
    </div>
  );
}

function AdminDashboard() {
  const [stats, setStats] = useState(null);
  useEffect(() => { api('/admin/dashboard').then(setStats).catch(()=>{}); }, []);
  if (!stats) return <div className="loading">Loading...</div>;
  const cards = [
    ['Total Products', stats.totalProducts],['Total Stock', stats.totalStock],['Low Stock', stats.lowStock],
    ['Out of Stock', stats.outOfStock],['Expired', stats.expiredProducts],['Total Orders', stats.totalOrders],
    ['Pending Orders', stats.pendingOrders],['Customers', stats.totalCustomers],
    ["Today's Sales", '₹'+stats.todaySales],['Monthly Sales', '₹'+stats.monthlySales]
  ];
  return (
    <div>
      <h1 className="page-title">Dashboard</h1>
      <div className="stat-grid">
        {cards.map(([label,value]) => (
          <div key={label} className="stat-card"><div className="label">{label}</div><div className="value">{value}</div></div>
        ))}
      </div>
    </div>
  );
}

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: '', price: '', discountPrice: '', stock: '10', categoryId: '1',
    description: '', sku: '', image: '', status: 'active',
    gender: '', material: '', brand: '', weight: '', expiryDate: ''
  });
  const load = () => api('/products?admin=1').then(d=>setProducts(d.products)).finally(()=>setLoading(false));
  useEffect(() => { load(); }, []);
  const submit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const body = {
        name: form.name,
        price: Number(form.price),
        discountPrice: form.discountPrice ? Number(form.discountPrice) : null,
        stock: Number(form.stock) || 0,
        categoryId: Number(form.categoryId),
        description: form.description || form.name,
        sku: form.sku || undefined,
        images: form.image ? [form.image] : undefined,
        status: form.status || 'active',
        gender: form.gender || null,
        material: form.material || null,
        brand: form.brand || null,
        weight: form.weight || null,
        expiryDate: form.expiryDate || null
      };
      await api('/products', { method: 'POST', body: JSON.stringify(body) });
      setShowForm(false);
      setForm({ name: '', price: '', discountPrice: '', stock: '10', categoryId: '1', description: '', sku: '', image: '', status: 'active', gender: '', material: '', brand: '', weight: '', expiryDate: '' });
      setLoading(true);
      load();
      alert('Product created. It will appear on the customer storefront immediately.');
    } catch (err) {
      alert(err.message);
    } finally {
      setSaving(false);
    }
  };
  if (loading) return <div className="loading">Loading...</div>;
  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
        <h1 className="page-title" style={{margin:0}}>Products</h1>
        <button className="btn" onClick={() => setShowForm(!showForm)}>{showForm ? 'Cancel' : 'Add Product'}</button>
      </div>
      {showForm && (
        <form onSubmit={submit} style={{background:'#fff',border:'1px solid var(--border)',borderRadius:6,padding:16,marginBottom:20}}>
          <h3 className="section-title">Create Product</h3>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
            <div className="form-group"><label>Name *</label><input className="input" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></div>
            <div className="form-group"><label>SKU</label><input className="input" value={form.sku} onChange={e=>setForm({...form,sku:e.target.value})} placeholder="Auto if empty" /></div>
            <div className="form-group"><label>Price *</label><input className="input" type="number" required min="1" value={form.price} onChange={e=>setForm({...form,price:e.target.value})} /></div>
            <div className="form-group"><label>Discount Price</label><input className="input" type="number" min="0" value={form.discountPrice} onChange={e=>setForm({...form,discountPrice:e.target.value})} /></div>
            <div className="form-group"><label>Stock</label><input className="input" type="number" min="0" value={form.stock} onChange={e=>setForm({...form,stock:e.target.value})} /></div>
            <div className="form-group"><label>Category *</label>
              <select className="input" value={form.categoryId} onChange={e=>setForm({...form,categoryId:e.target.value})}>
                <option value="1">Men</option>
                <option value="2">Women</option>
                <option value="3">Kids</option>
                <option value="4">Groceries</option>
              </select>
            </div>
            <div className="form-group"><label>Image URL</label><input className="input" value={form.image} onChange={e=>setForm({...form,image:e.target.value})} placeholder="https://..." /></div>
            <div className="form-group"><label>Status</label>
              <select className="input" value={form.status} onChange={e=>setForm({...form,status:e.target.value})}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className="form-group"><label>Brand</label><input className="input" value={form.brand} onChange={e=>setForm({...form,brand:e.target.value})} /></div>
            <div className="form-group"><label>Material</label><input className="input" value={form.material} onChange={e=>setForm({...form,material:e.target.value})} /></div>
            <div className="form-group"><label>Weight (groceries)</label><input className="input" value={form.weight} onChange={e=>setForm({...form,weight:e.target.value})} /></div>
            <div className="form-group"><label>Expiry Date (groceries)</label><input className="input" type="date" value={form.expiryDate} onChange={e=>setForm({...form,expiryDate:e.target.value})} /></div>
          </div>
          <div className="form-group"><label>Description</label><textarea className="input" rows={2} value={form.description} onChange={e=>setForm({...form,description:e.target.value})} /></div>
          <button className="btn" type="submit" disabled={saving}>{saving ? 'Saving...' : 'Create Product'}</button>
        </form>
      )}
      <table className="data-table">
        <thead><tr><th>Name</th><th>SKU</th><th>Price</th><th>Stock</th><th>Status</th></tr></thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td><td>{p.sku}</td><td>₹{p.discountPrice||p.price}</td><td>{p.availableStock}</td>
              <td><span className={'badge '+(p.isOutOfStock?'badge-red':p.isLowStock?'badge-orange':'badge-green')}>{p.isOutOfStock?'Out':p.isLowStock?'Low':'OK'}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AdminInventory() {
  const [inventory, setInventory] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [adjust, setAdjust] = useState(null);
  const [qty, setQty] = useState(10);
  const [reason, setReason] = useState('Restock');
  const [type, setType] = useState('increase');
  const load = () => { setLoading(true); api('/admin/inventory'+(filter?'?filter='+filter:'')).then(d=>setInventory(d.inventory)).finally(()=>setLoading(false)); };
  useEffect(load, [filter]);
  const submitAdjust = async () => {
    try {
      await api('/admin/inventory/'+adjust.id+'/adjust', { method:'POST', body: JSON.stringify({ quantity: qty, reason, type }) });
      setAdjust(null); load();
    } catch (e) { alert(e.message); }
  };
  return (
    <div>
      <h1 className="page-title">Inventory</h1>
      <div style={{display:'flex',gap:8,marginBottom:16,flexWrap:'wrap'}}>
        {['','low_stock','out_of_stock','expired'].map(f => (
          <button key={f||'all'} className={'btn btn-sm '+(filter===f?'':'btn-outline')} onClick={()=>setFilter(f)}>
            {f===''?'All':f.replace('_',' ')}
          </button>
        ))}
      </div>
      {loading ? <div className="loading">Loading...</div> : (
        <table className="data-table">
          <thead><tr><th>Product</th><th>SKU</th><th>Category</th><th>Stock</th><th>Available</th><th>Expiry</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            {inventory.map(i => (
              <tr key={i.id}>
                <td>{i.name}</td><td>{i.sku}</td><td>{i.category}</td><td>{i.stock}</td><td>{i.availableStock}</td>
                <td>{i.expiryDate||'—'}</td>
                <td><span className={'badge '+(i.status==='Out of Stock'||i.status==='Expired'?'badge-red':i.status==='Low Stock'?'badge-orange':'badge-green')}>{i.status}</span></td>
                <td><button className="btn btn-sm btn-outline" onClick={()=>{setAdjust(i);setType('increase');setQty(10);setReason('Restock');}}>Adjust</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {adjust && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.4)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:100}}>
          <div style={{background:'#fff',padding:24,borderRadius:8,width:360}}>
            <h3 style={{marginBottom:12}}>Adjust Stock — {adjust.name}</h3>
            <p style={{fontSize:13,marginBottom:12}}>Current: {adjust.stock}</p>
            <div className="form-group"><label>Type</label>
              <select className="input" value={type} onChange={e=>setType(e.target.value)}>
                <option value="increase">Increase</option><option value="decrease">Decrease</option>
              </select>
            </div>
            <div className="form-group"><label>Quantity</label><input className="input" type="number" min={1} value={qty} onChange={e=>setQty(Number(e.target.value))} /></div>
            <div className="form-group"><label>Reason</label><input className="input" value={reason} onChange={e=>setReason(e.target.value)} /></div>
            <div style={{display:'flex',gap:8}}>
              <button className="btn" onClick={submitAdjust}>Save</button>
              <button className="btn btn-outline" onClick={()=>setAdjust(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AdminOrders({ navigate }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => { api('/orders').then(d=>setOrders(d.orders)).catch(()=>{}); }, []);
  return (
    <div>
      <h1 className="page-title">Orders</h1>
      <table className="data-table">
        <thead><tr><th>ID</th><th>Customer</th><th>Date</th><th>Total</th><th>Payment</th><th>Status</th><th></th></tr></thead>
        <tbody>
          {orders.map(o => (
            <tr key={o.id}>
              <td>#{o.id}</td>
              <td>{o.customerName}<br/><span style={{fontSize:12,color:'var(--text-muted)'}}>{o.customerEmail}</span></td>
              <td>{new Date(o.createdAt).toLocaleDateString()}</td>
              <td>₹{o.total}</td>
              <td>{o.paymentStatus}</td>
              <td>
                <select className="input" style={{width:'auto',padding:'4px 8px'}} value={o.status}
                  onChange={async e => {
                    try {
                      await api('/orders/'+o.id+'/status', { method:'PATCH', body: JSON.stringify({ status: e.target.value }) });
                      setOrders(prev => prev.map(x => x.id===o.id ? {...x, status: e.target.value} : x));
                    } catch (err) { alert(err.message); }
                  }}>
                  {['confirmed','processing','shipped','delivered','cancelled'].map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </td>
              <td><button className="btn btn-sm btn-outline" onClick={()=>navigate('/admin/orders/'+o.id)}>View</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AdminOrderDetail({ id }) {
  const [order, setOrder] = useState(null);
  useEffect(() => { api('/orders/'+id).then(setOrder).catch(()=>{}); }, [id]);
  if (!order) return <div className="loading">Loading...</div>;
  return (
    <div>
      <h1 className="page-title">Order #{order.id}</h1>
      <p>{order.customerName} · {order.customerEmail} · {order.status}</p>
      <table className="data-table" style={{marginTop:16}}>
        <thead><tr><th>Product</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead>
        <tbody>
          {order.items.map((i, idx) => (
            <tr key={idx}><td>{i.name}</td><td>{i.quantity}</td><td>₹{i.price}</td><td>₹{i.lineTotal}</td></tr>
          ))}
        </tbody>
      </table>
      <p style={{marginTop:12,fontWeight:600}}>Total: ₹{order.total}</p>
    </div>
  );
}

function AdminCustomers() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => { api('/admin/customers').then(d=>setCustomers(d.customers)).catch(()=>{}); }, []);
  return (
    <div>
      <h1 className="page-title">Customers</h1>
      <table className="data-table">
        <thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Orders</th><th>Total Spent</th><th>Registered</th></tr></thead>
        <tbody>
          {customers.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td><td>{c.email}</td><td>{c.phone||'—'}</td>
              <td>{c.orderCount}</td><td>₹{c.totalSpent}</td>
              <td>{new Date(c.registeredAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AdminSales() {
  const [sales, setSales] = useState(null);
  useEffect(() => { api('/admin/sales').then(setSales).catch(()=>{}); }, []);
  if (!sales) return <div className="loading">Loading...</div>;
  return (
    <div>
      <h1 className="page-title">Sales</h1>
      <div className="stat-grid">
        <div className="stat-card"><div className="label">Today</div><div className="value">₹{sales.todaySales}</div></div>
        <div className="stat-card"><div className="label">This Week</div><div className="value">₹{sales.weekSales}</div></div>
        <div className="stat-card"><div className="label">This Month</div><div className="value">₹{sales.monthSales}</div></div>
        <div className="stat-card"><div className="label">Total Sales</div><div className="value">₹{sales.totalSales}</div></div>
        <div className="stat-card"><div className="label">Orders</div><div className="value">{sales.totalOrders}</div></div>
        <div className="stat-card"><div className="label">Avg Order</div><div className="value">₹{sales.averageOrderValue}</div></div>
      </div>
      <h3 className="section-title">Top Products</h3>
      <table className="data-table">
        <thead><tr><th>Product</th><th>Qty Sold</th><th>Revenue</th></tr></thead>
        <tbody>
          {sales.topProducts.map(p => (
            <tr key={p.productId}><td>{p.name}</td><td>{p.quantity}</td><td>₹{p.revenue}</td></tr>
          ))}
        </tbody>
      </table>
      <h3 className="section-title" style={{marginTop:24}}>Monthly</h3>
      <table className="data-table">
        <thead><tr><th>Month</th><th>Sales</th><th>Orders</th></tr></thead>
        <tbody>
          {sales.monthlySales.map(m => (
            <tr key={m.month}><td>{m.month}</td><td>₹{m.sales}</td><td>{m.orders}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  const { path, query, navigate } = useRoute();
  const { user, loading } = useAuth();
  if (loading) return <div className="loading">Loading...</div>;

  if (path.startsWith('/admin')) {
    if (!user) { navigate('/login'); return null; }
    if (user.role !== 'admin') return <div className="page container"><div className="error-box">Access denied. Admin only.</div></div>;
    let content;
    if (path === '/admin' || path === '/admin/') content = <AdminDashboard />;
    else if (path === '/admin/products') content = <AdminProducts />;
    else if (path === '/admin/inventory') content = <AdminInventory />;
    else if (path === '/admin/orders') content = <AdminOrders navigate={navigate} />;
    else if (path.match(/^\/admin\/orders\/\d+$/)) content = <AdminOrderDetail id={path.split('/').pop()} />;
    else if (path === '/admin/customers') content = <AdminCustomers />;
    else if (path === '/admin/sales') content = <AdminSales />;
    else content = <div>Not found</div>;
    return <AdminLayout navigate={navigate} path={path}>{content}</AdminLayout>;
  }

  let page;
  if (path === '/' || path === '') page = <HomePage navigate={navigate} query={query} />;
  else if (path === '/men') page = <CategoryPage category="men" navigate={navigate} />;
  else if (path === '/women') page = <CategoryPage category="women" navigate={navigate} />;
  else if (path === '/kids') page = <CategoryPage category="kids" navigate={navigate} />;
  else if (path === '/groceries') page = <CategoryPage category="groceries" navigate={navigate} />;
  else if (path.startsWith('/product/')) page = <ProductDetail slug={path.replace('/product/','')} navigate={navigate} />;
  else if (path === '/cart') page = <CartPage navigate={navigate} />;
  else if (path === '/checkout') page = <CheckoutPage navigate={navigate} />;
  else if (path === '/orders') page = <OrdersPage navigate={navigate} />;
  else if (path.match(/^\/orders\/\d+$/)) page = <OrderDetailPage id={path.split('/').pop()} navigate={navigate} />;
  else if (path === '/wishlist') page = <WishlistPage navigate={navigate} />;
  else if (path === '/login' || path === '/register') page = <LoginPage navigate={navigate} />;
  else page = <div className="page container"><div className="empty">Page not found. <button className="btn btn-sm" onClick={()=>navigate('/')}>Go Home</button></div></div>;

  return (
    <>
      <Header navigate={navigate} path={path} />
      {page}
      <footer className="footer"><div className="container">© {new Date().getFullYear()} NexMart — Demo E-Commerce</div></footer>
    </>
  );
}

function Root() {
  return (
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
