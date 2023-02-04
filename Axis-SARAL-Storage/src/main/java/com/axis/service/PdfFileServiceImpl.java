package com.axis.service;

import com.axis.entity.PdfFile;
import com.axis.respository.PdfFileRepository;
import com.axis.service.PdfFileService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
@Service
public class PdfFileServiceImpl implements PdfFileService {

    private final PdfFileRepository pdfFileRepository;

    public PdfFileServiceImpl(PdfFileRepository pdfFileRepository) {
        this.pdfFileRepository = pdfFileRepository;
    }

    @Override
    public PdfFile save(MultipartFile file) {
        try {
            PdfFile pdfFile = new PdfFile();
            pdfFile.setFileName(file.getOriginalFilename());
            pdfFile.setData(file.getBytes());
            return pdfFileRepository.save(pdfFile);
        } catch (IOException ex) {
            throw new IllegalArgumentException("Could not store the file. Please try again!");
        }
    }

    @Override
    public PdfFile getFile(Long id) {
        return pdfFileRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("File not found with id: " + id));
    }
}

