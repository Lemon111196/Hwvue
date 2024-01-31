
import { Button } from "@mui/material";
import { LinkcardContainer } from "./style";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { ILink } from "./interface";
// import ModeEditIcon from '@mui/icons-material/ModeEdit';
// import DeleteIcon from '@mui/icons-material/Delete';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { apiService } from "../../services";
import { toast } from "react-toastify";
// import { TextFieldStyle } from "../Note App/style";
import Dialog from "../../components/Modal";


export default function Linkcard() {

  const [linkcard, setLinkcard] = useState<ILink[]>([]);
  const [selectedLinkcard, setSelectedLinkcard] = useState<ILink | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);


  const linkDefaultValue = {
    title: '',
    content: '',
    status: "L",
  }
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: linkDefaultValue
  })

  const getStatusBorderColor = (status: string) => {
    switch (status) {
      case 'LEARNED':
        return '#00BFFF';
      case 'LEARNING':
        return '#00FF00';
      case 'HAVE TO LEARN':
        return '#FF3030';
      default:
        return '#00FF00';
    }
  }

  //!Create a new linkcard ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  const createLinkcard = async (data: any) => {
    const newLink: ILink = {
      title: data.title,
      url: data.url,
      status: data.status,
    };
    console.log(data);
    try {
      const response = await apiService.post(`/linkcard/create`, data)
      localStorage.setItem('accessToken', response.data.accessToken)
      console.log(response);
      if (response.status === 200) {
        toast.success("Created successfully")
      }
      setLinkcard([...linkcard, newLink]);
      reset();
    } catch (error) {
      toast.error('Create failed')
    }
  };

  return (
    <LinkcardContainer>
      <div className="linkcard">
        <div className="add-linkcard">
          <Button className="btn-add">
            <AddIcon onClick={() => showModal} className="add-icon" />
          </Button>
        </div>
      </div>
      <Dialog open={!!selectedLinkcard}
        title="Create a new linkcard"
        onSubmit={() => createLinkcard}

      ></Dialog>
    </LinkcardContainer>
  )
}
