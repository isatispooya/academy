/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { styled } from '@mui/system';
import {
  Box,
  List,
  Badge,
  Button,
  Popover,
  Divider,
  ListItem,
  Typography,
  IconButton,
} from '@mui/material';

import Iconify from 'src/components/iconify';

const CartContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: 400,
}));

const formatPrice = (price) => new Intl.NumberFormat('fa-IR').format(price);

const calculateTotal = (products) => {
  let totalPrice = 0;
  let totalDiscount = 0;
  let realPrice = 0;

  products.forEach((item) => {
    const price = parseInt(item.price, 10);
    const discount = parseFloat(item.discount) / 100;
    const discountedPrice = price * (1 - discount);

    totalPrice += discountedPrice * item.quantity;
    totalDiscount += (price - discountedPrice) * item.quantity;
    realPrice += price * item.quantity;
  });

  return { totalPrice, totalDiscount, realPrice };
};
const CartPopover = ({ anchorEl, handleClose, products, removeProduct, incrementQuantity }) => {
  const { totalPrice, totalDiscount, realPrice } = calculateTotal(products);

  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <CartContainer
        style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          maxWidth: '400px',
          borderRadius: '10px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography
          id="popover-title"
          variant="h6"
          component="h2"
          style={{
            background: '#60a5fa',
            color: '#ffffff',
            padding: '12px 20px',
            textAlign: 'center',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            marginBottom: '10px',
          }}
        >
          سبد خرید شما
        </Typography>
        <List
          sx={{
            padding: '10px',
            maxHeight: '400px',
            overflowY: 'auto',
          }}
        >
          {products.map((item) => (
            <React.Fragment key={item.id}>
              <ListItem
                className="flex items-center gap-4 py-4"
                style={{ borderBottom: '1px solid #eeeeee', padding: '20px' }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '70px', height: '70px', borderRadius: '8px' }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 'bolder', color: '#333', fontSize: '15px' }}
                  >
                    {item.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="body2"
                      sx={{ textDecoration: 'line-through', color: '#f44336' }}
                    >
                      {formatPrice(item.price)} تومان
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 'bolder', color: 'green', fontSize: '17px' }}
                    >
                      {formatPrice(item.price * (1 - parseFloat(item.discount) / 100))} تومان
                    </Typography>
                  </Box>
                </Box>
                <IconButton
                  aria-label="delete"
                  onClick={() => removeProduct(item.id)}
                  style={{ color: '#f44336' }}
                >
                  <Iconify icon="material-symbols:close-rounded" />
                </IconButton>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
        <Divider sx={{ marginY: '20px' }} />
        <Box
          sx={{
            boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 20px',
              borderRadius: '8px',
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
              مجموع قیمت:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
              {formatPrice(realPrice)} تومان
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0px 20px',
              borderRadius: '8px',
              marginBottom: '10px',
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#f44336' }}>
              میزان تخفیف:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#f44336' }}>
              {formatPrice(totalDiscount)} تومان
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 20px',
              backgroundColor: '#e8f5e9',
              borderRadius: '8px',
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#388e3c' }}>
              مجموع قیمت:
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#388e3c' }}>
              {formatPrice(totalPrice)} تومان
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <Button variant="text" onClick={handleClose}>
            بستن
          </Button>
          <Button variant="contained" onClick={handleClose}>
            پرداخت
          </Button>
        </Box>
      </CartContainer>
    </Popover>
  );
};

const ShoppingCart = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'قهوه',
      price: '20000',
      discount: '10%',
      quantity: 1,
      image: '../../../../public/categories/category1.png',
    },
    {
      id: 2,
      title: 'قهوه ساز دستی',
      price: '35000',
      discount: '15%',
      quantity: 1,
      image: '../../../../public/categories/category2.png',
    },
    {
      id: 3,
      title: 'قهوه ساز برقی',
      price: '50000',
      discount: '20%',
      quantity: 1,
      image: '../../../../public/categories/category3.png',
    },
    {
      id: 4,
      title: 'پودر قهوه',
      price: '40000',
      discount: '20%',
      quantity: 1,
      image: '../../../../public/categories/category4.png',
    },
    {
      id: 4,
      title: 'پودر قهوه',
      price: '40000',
      discount: '20%',
      quantity: 1,
      image: '../../../../public/categories/category4.png',
    },
    {
      id: 4,
      title: 'پودر قهوه',
      price: '40000',
      discount: '20%',
      quantity: 1,
      image: '../../../../public/categories/category4.png',
    },
    {
      id: 4,
      title: 'پودر قهوه',
      price: '40000',
      discount: '20%',
      quantity: 1,
      image: '../../../../public/categories/category4.png',
    },
    {
      id: 4,
      title: 'پودر قهوه',
      price: '40000',
      discount: '20%',
      quantity: 1,
      image: '../../../../public/categories/category4.png',
    },
    {
      id: 4,
      title: 'پودر قهوه',
      price: '40000',
      discount: '20%',
      quantity: 1,
      image: '../../../../public/categories/category4.png',
    },
  ]);

  const handleClose = () => setAnchorEl(null);
  const handleOpen = (event) => setAnchorEl(event.currentTarget);

  const removeProduct = (productId) => {
    setProducts(
      products
        .map((product) =>
          product.id === productId ? { ...product, quantity: product.quantity - 1 } : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  const incrementQuantity = (productId) => {
    setProducts(
      products.map((product) =>
        product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  return (
    <>
      <Badge badgeContent={products.length} color="primary">
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          style={{ padding: '8px', minWidth: '36px' }}
        >
          <Iconify icon="mdi:cart" style={{ fontSize: '1.5rem' }} />
        </Button>
      </Badge>
      <CartPopover
        anchorEl={anchorEl}
        handleClose={handleClose}
        products={products}
        removeProduct={removeProduct}
        incrementQuantity={incrementQuantity}
      />
    </>
  );
};

export default ShoppingCart;
