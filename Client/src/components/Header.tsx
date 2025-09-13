export default function Header(props: any) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" sx={{ mr: 2 }}>
            E-comment
          </Typography>
          <Stack direction="row">
            {links.map((link) => (
              <Button
                key={link.to}
                component={NavLink}
                sx={navStyles}
                to={link.to}
              >
                {link.title}
              </Button>
            ))}
          </Stack>
        </Box>

        <Box>
          <IconButton size="large" edge="start" color="inherit">
            <Badge badgeContent={2} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
