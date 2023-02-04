package com.axis.service;

import com.axis.entity.PdfFile;
import org.springframework.web.multipart.MultipartFile;

public interface PdfFileService {

    PdfFile save(MultipartFile file);
    PdfFile getFile(Long id);
}

