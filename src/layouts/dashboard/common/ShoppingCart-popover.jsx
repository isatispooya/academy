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

const ProductImage = styled('img')({
  width: '120px',
  height: '120px',
  objectFit: 'cover',
});

const CartPopover = ({ anchorEl, handleClose, products, removeProduct, incrementQuantity }) => (
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
    <CartContainer>
      <Typography id="popover-title" variant="h6" component="h2">
        سبد خرید
      </Typography>
      <Divider />
      <List>
        {products.map((item) => (
          <>
            <ListItem className='flex gap-12 py-6' key={item.id}>
              <Box className='flex justify-between ' sx={{ display: 'flex', gap: 2 }}>
                <ProductImage src={item.image} alt={item.title} loading="lazy" />
                <Box className='space-y-0' sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.discount} تخفیف
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                    {item.price} تومان
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>
                    {item.quantity} عدد
                  </Typography>
                </Box>
              </Box>
                <IconButton edge="end" aria-label="delete" onClick={() => removeProduct(item.id)}>
                  <Iconify className='text-red-500' icon="material-symbols:delete-outline" />
                </IconButton>
            </ListItem>
            <Divider sx={{ width: '100%' }} />
          </>
        ))}
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button className="bg-green-800" variant="contained" onClick={handleClose}>
          بستن
        </Button>
        <Button variant="contained" color="secondary" onClick={handleClose}>
          پرداخت
        </Button>
      </Box>
    </CartContainer>
  </Popover>
);

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
        <Button variant="contained" color="primary" onClick={handleOpen}>
          <Iconify icon="mdi:cart" />
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
