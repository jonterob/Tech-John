<?php include 'config.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Premium Goods Hub | Quality Products Delivered</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="Premium Goods Hub.css">
    <link rel="stylesheet" href="alert.css">
</head>
<body>
    <header class="header">
        <nav class="nav-container">
            <div class="logo">PremiumGoods</div>
            <div class="nav-links">
                <a href="#products">Products</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#blog">Blog</a>
                <a href="cart.php">Cart (<?= isset($_SESSION['cart']) ? array_sum($_SESSION['cart']) : 0 ?>)</a>
            </div>
        </nav>
    </header>

    <section class="hero">
        <h1>Discover Premium Quality Products</h1>
        
        <a href="#products" class="btn" style="margin-top: 1rem;">Shop Now</a>
    </section>

    <section class="products" id="products">
        <div class="products-grid">
            <?php
            $stmt = $pdo->query("SELECT * FROM products");
            while ($product = $stmt->fetch(PDO::FETCH_ASSOC)) :
            ?>
         <div class="product-card">
                    <img src="<?= htmlspecialchars($product['image_path']) ?>" alt="<?= htmlspecialchars($product['name']) ?>">
                     <div class="product-info">
                          <h3><?= htmlspecialchars($product['name']) ?></h3>
                          <p class="product-description"><?= htmlspecialchars($product['description']) ?></p>
                          <p class="product-price">Ksh<?= htmlspecialchars($product['price']) ?></p>
                      </div>
               <div class="product-actions">
                   <a href="add_to_cart.php?id=<?= $product['id'] ?>" class="btn">Add to Cart</a>
               </div>
        </div>
            <?php endwhile; ?>
        </div>
    </section>

    <section class="newsletter">
    <h2>Join Our Newsletter</h2>
    <p>Get exclusive offers and updates directly in your inbox</p>
    
    <?php if (isset($_SESSION['message'])): ?>
        <div class="alert success"><?= htmlspecialchars($_SESSION['message']) ?></div>
        <?php unset($_SESSION['message']); ?>
    <?php endif; ?>
    
    <?php if (isset($_SESSION['error'])): ?>
        <div class="alert error"><?= htmlspecialchars($_SESSION['error']) ?></div>
        <?php unset($_SESSION['error']); ?>
    <?php endif; ?>

    <form class="newsletter-form" action="subscribe.php" method="POST">
        <input type="email" name="email" class="newsletter-input" 
               placeholder="Enter your email" required>
        <button type="submit" class="newsletter-btn">Subscribe</button>
    </form>
</section>

     <footer class="footer">
        <div class="footer-content" style="max-width:1200px; margin:0 auto; display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:2rem;">
            <div class="footer-section">
                <h3>About Us</h3>
                <p>PremiumGoods is committed to delivering quality products with exceptional customer service.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul style="list-style:none;">
                    <li><a href="#faq" style="color:inherit; text-decoration:none;">FAQ</a></li>
                    <li><a href="#shipping" style="color:inherit; text-decoration:none;">Shipping Policy</a></li>
                    <li><a href="#returns" style="color:inherit; text-decoration:none;">Returns</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Connect With Us</h3>
                <div class="social-icons" style="display:flex; gap:1rem; font-size:1.5rem;">
                    <a href="https://facebook.com/jonte.roberto" style="color:blue;"><i class="fab fa-facebook"></i></a>
                    <a href="https://instagram.com/jonte.rob" style="color:blue;"><i class="fab fa-instagram"></i></a>
                    <a href="https://twitter.com/@JonteRob" style="color:blue;"><i class="fab fa-twitter"></i></a>
                    <a href="https://linkedin.com/in/john-njoroge" style="color:blue;"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://t.me/+254111218873" style="color:blue;"><i class="fab fa-telegram"></i></a>
                    <a href="https://wa.me/+254111218873" style="color:blue;"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
    </footer>
    <script type="text/javascript" src="Premium Goods Hub.js"></script>
</body>
</html>