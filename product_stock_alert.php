<?php
/**
 * Plugin Name: Product Stock Waitlist Manager for WooCommerce
 * Plugin URI: https://multivendorx.com/
 * Description: Boost sales with real-time stock alerts! Notify customers instantly when products are back in stock. Simplify data management by exporting and importing stock data with ease.
 * Author: MultiVendorX
 * Version: 2.5.16
 * Requires at least: 5.4
 * Tested up to: 6.7.1
 * WC requires at least: 8.2.2
 * WC tested up to: 9.6.1
 * Author URI: https://multivendorx.com/
 * Text Domain: notifima
 * Requires Plugins: woocommerce
 * Domain Path: /languages/
 */

defined( 'ABSPATH' ) || exit; // Exit if accessed directly

require_once __DIR__ . '/vendor/autoload.php';

function Notifima() {
    return \Notifima\Notifima::init( __FILE__ );
}

Notifima();
