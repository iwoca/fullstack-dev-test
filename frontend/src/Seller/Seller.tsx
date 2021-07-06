import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from "@material-ui/core";
import { useEffect, useState } from "react";

export const Seller = ({ sellerId }: { sellerId: string }) => {
  const [seller, setSeller] = useState<{
    id: number;
    name: string;
    handle: string;
  } | null>(null);
  const [fetchSellerError, setFetchSellerError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/sellers/${sellerId}`)
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to fetch seller");

        const data = await res.json();
        setSeller(data);
      })
      .catch((err) => {
        setFetchSellerError(err.message);
      });
  }, [sellerId]);

  if (fetchSellerError) {
    return <div>{fetchSellerError}</div>;
  }

  if (!seller) {
    return <div>pending</div>;
  }

  return (
    <Card>
      <CardHeader title="Edit seller" subheader="Make changes to a seller" />
      <CardContent>
        <form noValidate autoComplete="off">
          <TextField
            id="sellerId"
            label="Seller ID"
            fullWidth={true}
            style={{ margin: 8 }}
            value={seller.id}
            disabled={true}
          />
          <TextField
            id="sellerName"
            label="Seller Name"
            fullWidth={true}
            style={{ margin: 8 }}
            value={seller.name}
            disabled={true}
          />
          <TextField
            id="sellerHandle"
            label="Seller Handle"
            fullWidth={true}
            style={{ margin: 8 }}
            value={seller.handle}
          />
          <Button variant="contained" color="primary">
            Update
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
