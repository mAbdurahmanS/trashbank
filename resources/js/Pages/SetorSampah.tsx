import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

import { PageProps } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel,
} from "@/Components/ui/select";
import { Button } from "@/Components/ui/button";
import { File, ListFilter, MoreHorizontal, PlusCircle } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";

export default function SetorSampah({ auth, database }: PageProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        jenis_sampah: "",
        cabang: "",
        berat_sampah: 0,
        total_harga: 0,
        point: 0,
    });

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleBeratSampahChange = (e: any) => {
        const berat = e.target.value;
        setData((prevData) => ({
            ...prevData,
            berat_sampah: parseInt(berat),
            total_harga: berat * 5000,
            point: parseInt(berat),
        }));
    };

    const submitLocation = (e: any) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, (data as any)[key]);
        });

        post(route("setor-sampah.store"), {
            data: formData,
            forceFormData: true,
            onSuccess: () => {
                reset();
                setIsDialogOpen(false);
            },
        });
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Setor Sampah
                </h2>
            }
        >
            <Head title="Setor Sampah" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <main className="grid flex-1 overflow-hidden items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                        <Tabs defaultValue="semua">
                            <div className="flex items-center">
                                <TabsList>
                                    <TabsTrigger value="semua">
                                        Semua
                                    </TabsTrigger>
                                </TabsList>
                                <div className="ml-auto flex items-center gap-2">
                                    <Dialog
                                        open={isDialogOpen}
                                        onOpenChange={setIsDialogOpen}
                                    >
                                        <DialogTrigger asChild>
                                            <Button
                                                size="sm"
                                                className="h-8 gap-1"
                                            >
                                                <PlusCircle className="h-3.5 w-3.5" />
                                                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                                    Setor Sampah
                                                </span>
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px] md:max-w-[70vw]">
                                            <DialogHeader>
                                                <DialogTitle>
                                                    Setor Sampah
                                                </DialogTitle>
                                                <DialogDescription>
                                                    Buat dunia semakin bersih.
                                                    Klik tambah saat sudah
                                                    selesai.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <form
                                                onSubmit={submitLocation}
                                                className="grid gap-4 py-4"
                                            >
                                                <div className="grid grid-cols-8 items-center gap-2">
                                                    <Label className="text-left">
                                                        Cabang TPS:
                                                    </Label>
                                                    <Select
                                                        onValueChange={(
                                                            value
                                                        ) =>
                                                            setData(
                                                                (prevData) => ({
                                                                    ...prevData,
                                                                    cabang: value,
                                                                })
                                                            )
                                                        }
                                                    >
                                                        <SelectTrigger className="col-span-7">
                                                            <SelectValue placeholder="Pilih TPS" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectItem value="TPS A">
                                                                    TPS A
                                                                </SelectItem>
                                                                <SelectItem value="TPS B">
                                                                    TPS B
                                                                </SelectItem>
                                                                <SelectItem value="TPS C">
                                                                    TPS C
                                                                </SelectItem>
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="grid grid-cols-8 items-center gap-2">
                                                    <Label
                                                        htmlFor="foto"
                                                        className="text-left"
                                                    >
                                                        Foto Sampah:
                                                    </Label>
                                                    <Input
                                                        id="foto"
                                                        className="col-span-7"
                                                        type="file"
                                                        onChange={(e) => {
                                                            setData(
                                                                (prevData) => ({
                                                                    ...prevData,
                                                                    foto_sampah:
                                                                        e.target
                                                                            .files[0],
                                                                })
                                                            );
                                                        }}
                                                        required
                                                    />
                                                </div>
                                                <div className="grid grid-cols-8 items-center gap-2">
                                                    <Label
                                                        htmlFor="foto"
                                                        className="text-left"
                                                    >
                                                        Jenis Sampah:
                                                    </Label>
                                                    <Select
                                                        onValueChange={(
                                                            value
                                                        ) =>
                                                            setData(
                                                                (prevData) => ({
                                                                    ...prevData,
                                                                    jenis_sampah:
                                                                        value,
                                                                })
                                                            )
                                                        }
                                                    >
                                                        <SelectTrigger className="col-span-7">
                                                            <SelectValue placeholder="Jenis Sampah" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectItem value="organik">
                                                                    Organik
                                                                </SelectItem>
                                                                <SelectItem value="anorganik">
                                                                    Anorganik
                                                                </SelectItem>
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="grid grid-cols-8 items-center gap-2">
                                                    <Label
                                                        htmlFor="beratSampah"
                                                        className="text-left"
                                                    >
                                                        Berat Sampah (kg):
                                                    </Label>
                                                    <Input
                                                        id="beratSampah"
                                                        defaultValue={
                                                            data?.berat_sampah
                                                        }
                                                        onChange={
                                                            handleBeratSampahChange
                                                        }
                                                        className="col-span-7"
                                                        type="number"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-8 items-center gap-2">
                                                    <Label
                                                        htmlFor="totalHarga"
                                                        className="text-left"
                                                    >
                                                        Total Harga (Rp):
                                                    </Label>
                                                    <Input
                                                        id="totalHarga"
                                                        value={data.total_harga}
                                                        className="col-span-7"
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="grid grid-cols-8 items-center gap-2">
                                                    <Label
                                                        htmlFor="point"
                                                        className="text-left"
                                                    >
                                                        Point
                                                        <br />
                                                        (1kg = 1 point):
                                                    </Label>
                                                    <Input
                                                        id="point"
                                                        value={data.point}
                                                        className="col-span-7"
                                                        readOnly
                                                    />
                                                </div>
                                                <DialogFooter>
                                                    <Button
                                                        type="submit"
                                                        disabled={processing}
                                                    >
                                                        Setor
                                                    </Button>
                                                </DialogFooter>
                                            </form>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                            <TabsContent value="semua">
                                <Card x-chunk="dashboard-06-chunk-0">
                                    <CardHeader>
                                        <CardTitle>Setoran Sampah</CardTitle>
                                        <CardDescription>
                                            Kelola setoran sampah Anda dan lihat
                                            kinerjanya.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="hidden w-[100px] sm:table-cell">
                                                        No.
                                                    </TableHead>
                                                    <TableHead className="hidden w-[100px] sm:table-cell">
                                                        Nama
                                                    </TableHead>
                                                    <TableHead className="hidden w-[100px] sm:table-cell">
                                                        Foto Sampah
                                                    </TableHead>
                                                    <TableHead>
                                                        Jenis Sampah
                                                    </TableHead>
                                                    {/* <TableHead>
                                                        Status
                                                    </TableHead> */}
                                                    <TableHead className="hidden md:table-cell">
                                                        Berat Sampah
                                                    </TableHead>
                                                    <TableHead className="hidden md:table-cell">
                                                        Total Harga
                                                    </TableHead>
                                                    <TableHead className="hidden md:table-cell">
                                                        Point
                                                    </TableHead>
                                                    <TableHead className="hidden md:table-cell">
                                                        Dibuat pada
                                                    </TableHead>
                                                    <TableHead>
                                                        Lokasi Cabang
                                                    </TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {database.map(
                                                    (item: any, index: any) => (
                                                        <TableRow key={item.id}>
                                                            <TableCell className="hidden md:table-cell">
                                                                {index + 1}.
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                {item.nama}
                                                            </TableCell>
                                                            <TableCell className="hidden sm:table-cell">
                                                                <img
                                                                    alt="Product image"
                                                                    className="aspect-square rounded-md object-cover"
                                                                    height="64"
                                                                    src={
                                                                        item.foto_sampah ||
                                                                        "/placeholder.svg"
                                                                    }
                                                                    width="64"
                                                                />
                                                            </TableCell>
                                                            <TableCell className="font-medium">
                                                                {
                                                                    item.jenis_sampah
                                                                }
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                {
                                                                    item.berat_sampah
                                                                }{" "}
                                                                kg
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                Rp.{" "}
                                                                {
                                                                    item.total_harga
                                                                }
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                {item.point}
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                {item.createdAt}
                                                            </TableCell>
                                                            <TableCell className="hidden md:table-cell">
                                                                {item.cabang}
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                )}
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                    {/* <CardFooter>
                                        <div className="text-xs text-muted-foreground">
                                            Showing <strong>1-10</strong> of{" "}
                                            <strong>32</strong> products
                                        </div>
                                    </CardFooter> */}
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </main>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
