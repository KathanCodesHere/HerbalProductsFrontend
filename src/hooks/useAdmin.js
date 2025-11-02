import { useState } from "react";
import { createProductService, createCategoryService, getAllCategoryService, deleteCategoryService,updateCategoryService } from "../services/adminService";

export const useAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //create Products
  const createProductAd = async (product) => {
    try {
      setLoading(true);
      const data = await createProductService(product);
      setError(null);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "adding product failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  //create categories
  const createCategoryAd = async (product) => {
    try {
      setLoading(true);
      const data = await createCategoryService(product);
      setError(null);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "creating category failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  //create categories
  const getAllCategoryAd = async () => {
    try {
      setLoading(true);
      const data = await getAllCategoryService();
      setError(null);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "getting category failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  //delete category
  const deleteCategoryAd = async (id) => {
    try {
      setLoading(true);
      const data = await deleteCategoryService(id);
      setError(null);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "deletion failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  //update category
  const updateCategoryAd = async (id) => {
    try {
      setLoading(true);
      const data = await updateCategoryService(id);
      setError(null);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "creating deletion failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, createProductAd, createCategoryAd, getAllCategoryAd,deleteCategoryAd,updateCategoryAd };
};
