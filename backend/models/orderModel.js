import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    user: {
      // Relationship with User models
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderItems: {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },

      // Relationship with product
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
    },

    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethode: {
      type: String,
      required: true,
    },
    // Paypal will send back some data back whthere its successfull or not
    paymentResult: {
      id: { type, String },
      status: { type, String },
      update_item: { type, String },
      email_address: { type, String },
    },

    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },

    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },

    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },

    paidAt: {
      type: Date,
    },

    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamp: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
