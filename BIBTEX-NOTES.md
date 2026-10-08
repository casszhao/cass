# BibTeX update for casszhao/cass

Prepared from repository commit `463c797` (8 October 2026).

## Install

Copy the files in this package into the repository root, preserving folder names, and commit them. This adds 26 BIB controls to `index.md`, 13 to `publications.md`, the shared include/styles/script, citation data, and a combined bibliography endpoint. Your existing GitHub Pages build publishes them.

Visitors click **{ } BIB**, then **Copy BibTeX**. If clipboard access is denied, the citation is selected for manual copying. Expanding and manually selecting citations works without JavaScript. The combined download is available at `/cass/citations.bib`.

## Maintain

`_data/citations.json` is the single source for both the visible citation panels and the downloadable bibliography. Add a record and an include such as `{% raw %}{% include bibtex.html key="your-key" %}{% endraw %}` after a paper. Citation text is HTML-escaped; it is never evaluated as HTML. No extra Jekyll plugin is required.

`citations.bib` in the repository contains Jekyll front matter and a Liquid loop; GitHub Pages renders it to plain BibTeX. For direct import into Overleaf or Zotero, use the separately supplied `cass-papers.bib`, or the deployed download.

## Verification and limitations

A full Jekyll build and real-browser visual test were not available in this environment. Liquid includes, layout and bibliography were rendered with LiquidJS in Jekyll-include mode. Site Sass compiled. JSDOM checks verified all 39 exact clipboard copies, the denied-clipboard selection fallback, control visibility without JavaScript, and matching citation keys. JavaScript syntax and the Git diff also passed checks. This does not replace a full GitHub Pages/Jekyll build or a real-browser visual test.

All 39 entries were parsed using bibtexparser, and every listed paper maps to exactly one citation control. Five recent EMNLP/AACL 2026 entries use the publication details on the author's website because final publisher records were unavailable. These do not contain guessed pages or DOIs. See the per-entry notes below.

The original website titles and author lines remain intact; citation records use final publisher metadata when available. Consequently, some titles and author lists differ (notably RULEBREAKERS, language-targeted pruning, ScImage, and CCDE).

### cheng2026finetuning

Can Fine-Tuning Erase Your Edits? On the Fragile Coexistence of Knowledge Editing and Adaptation

Source: https://arxiv.org/abs/2511.05852

Status: source-metadata. 

### nie2026value

From Value Conditioning to Behavioral Shift: Lightweight Value Alignment of LLMs

Source: https://openreview.net/pdf?id=LkZMtWhCxK

Status: author-website. Title, authors, venue and year follow the author website. Final publisher metadata was not accessible; no unverified pages or DOI added.

### datta2026early

LLMs Decide Early and Explain Later: You Can Stop Them Early

Source: https://arxiv.org/abs/2604.22266

Status: author-website. Title, authors, venue and year follow the author website. Final publisher metadata was not accessible; no unverified pages or DOI added. Conference title and author order follow the author website; the linked arXiv version has an earlier title and different author order.

### Ye_2026_CVPR

SCIEval: Evaluating and Benchmarking the Faithfulness of Scientific Image Generation and Interpretation with Large Multimodal Models

Source: https://openaccess.thecvf.com/content/CVPR2026/html/Ye_SCIEval_Evaluating_and_Benchmarking_the_Faithfulness_of_Scientific_Image_Generation_CVPR_2026_paper.html

Status: source-metadata. 

### youssef2026tracing

Tracing and Reversing Edits in LLMs: A Study on Rank-One Model Edits

Source: https://proceedings.iclr.cc/paper_files/paper/2026/hash/28bfea825dc61f7adc9f1e2eaf5bdd2b-Abstract-Conference.html

Status: source-metadata. Final proceedings title omits the subtitle shown on the website.

### nie2026perspectra

PerSpectra: A Scalable and Configurable Pluralist Benchmark of Perspectives from Arguments

Source: https://proceedings.iclr.cc/paper_files/paper/2026/hash/7be86db6ef1209cf97a418758101fa7c-Abstract-Conference.html

Status: source-metadata. 

### valentino2026mitigating

Mitigating Content Effects on Reasoning in Language Models through Fine-Grained Activation Steering

Source: https://ojs.aaai.org/index.php/AAAI/article/view/40617

Status: source-metadata. 

### ye2026making

Making Visual Dialogue More Engaging: A New Task, Method, and Metric

Source: https://ojs.aaai.org/index.php/AAAI/article/view/38650

Status: source-metadata. 

### kurz-etal-2026-limitations

Investigating Language-Specific Calibration for Pruning Multilingual Large Language Models

Source: https://aclanthology.org/2026.tacl-1.9.bib

Status: publisher-export. Publisher BibTeX export. Final title: On the Limitations of Language-targeted Pruning: Investigating the Calibration Language Impact in Multilingual LLM Pruning.

### li2026scrum9

SCRum-9: Multilingual Stance Classification over Rumours on Social Media

Source: https://ojs.aaai.org/index.php/ICWSM/article/view/42707

Status: source-metadata. 

### ye-etal-2026-kidsartbench

KidsArtBench: Multi-Dimensional Children’s Art Evaluation with Attribute-Aware MLLMs

Source: https://aclanthology.org/2026.eacl-long.267.bib

Status: publisher-export. Publisher BibTeX export.

### muscato-etal-2026-seeing

Seeing All Sides: Multi-Perspective In-Context Learning for Subjective NLP

Source: https://aclanthology.org/2026.findings-eacl.137.bib

Status: publisher-export. Publisher BibTeX export.

### pmlr-v267-chan25a

Rulebreakers Challenge: Revealing a Blind Spot in Large Language Models’ Reasoning with Formal Logic

Source: https://proceedings.mlr.press/v267/chan25a.html

Status: source-metadata. Uses the final ICML title rather than the earlier Rulebreakers Challenge title.

### pmlr-v267-youssef25a

Position: Editing Large Language Models Poses Serious Safety Risks

Source: https://proceedings.mlr.press/v267/youssef25a.html

Status: source-metadata. 

### zhang2025scimage

ScImage: How good are multimodal large language models at scientific text-to-image generation?

Source: https://proceedings.iclr.cc/paper_files/paper/2025/hash/146b5b0feb14fe8e630669ad1faba25e-Abstract-Conference.html

Status: source-metadata. Uses the ICLR author order, with Steffen Eger second.

### he-etal-2025-minimal

Minimal, Local, and Robust: Embedding-Only Edits for Implicit Bias in T2I Models

Source: https://aclanthology.org/2025.emnlp-main.777.bib

Status: publisher-export. Publisher BibTeX export.

### li-etal-2025-label

Label Set Optimization via Activation Distribution Kurtosis for Zero-Shot Classification with Generative Models

Source: https://aclanthology.org/2025.emnlp-main.1617.bib

Status: publisher-export. Publisher BibTeX export.

### li-etal-2025-context-learning

It's All About In-Context Learning! Teaching Extremely Low-Resource Languages to LLMs

Source: https://aclanthology.org/2025.emnlp-main.1502.bib

Status: publisher-export. Publisher BibTeX export.

### zhou-etal-2025-revisiting

Revisiting Pruning vs Quantization for Small Language Models

Source: https://aclanthology.org/2025.findings-emnlp.645.bib

Status: publisher-export. Publisher BibTeX export.

### lewis-lim-etal-2025-analysing

Analysing Chain of Thought Dynamics: Active Guidance or Unfaithful Post-hoc Rationalisation?

Source: https://aclanthology.org/2025.emnlp-main.1516.bib

Status: publisher-export. Publisher BibTeX export.

### ye-etal-2025-knowledge

Knowledge Image Matters: Improving Knowledge-Based Visual Reasoning with Multi-Image Large Language Models

Source: https://aclanthology.org/2025.acl-long.1063.bib

Status: publisher-export. Publisher BibTeX export.

### chen-etal-2025-explainable

Explainable Hallucination through Natural Language Inference Mapping

Source: https://aclanthology.org/2025.findings-acl.96.bib

Status: publisher-export. Publisher BibTeX export.

### li2025aigc

AI-generated content in cross-domain applications: Research trends, challenges and propositions

Source: https://www.sciencedirect.com/science/article/pii/S0950705125016739

Status: source-metadata. 

### ye2025ccde

CCDE: A Compact and Competitive Dialogue Evaluation Framework via Knowledge Distillation of Large Language Models

Source: https://eprints.whiterose.ac.uk/id/eprint/231513/

Status: source-metadata. Includes the seventh author, Keqin Li, who is absent from the website listing. Volume and pages omitted until checked against the final publisher record.

### youssef-etal-2025-make

How to Make LLMs Forget: On Reversing In-Context Knowledge Edits

Source: https://aclanthology.org/2025.naacl-long.630.bib

Status: publisher-export. Publisher BibTeX export.

### youssef-etal-2025-fact

Has this Fact been Edited? Detecting Knowledge Edits in Language Models?

Source: https://aclanthology.org/2025.naacl-long.492.bib

Status: publisher-export. Publisher BibTeX export. Publisher author order is Youssef, Zhao, Seifert, Schlötterer; the listing has the last two reversed.

### he2026editrobustness

Edit Robustness Under Fine-Tuning in Text-to-Image Models

Source: https://openreview.net/forum?id=bfeSYJnUNa#discussion

Status: author-website. Title, authors, venue and year follow the author website. Final publisher metadata was not accessible; no unverified pages or DOI added.

### lewislim2026think

Think When Unsure: Leveraging Model Confidence to Decide When to Use Chain-of-Thought

Source: https://openreview.net/forum?id=I6R1yvcCFg#discussion

Status: author-website. Title, authors, venue and year follow the author website. Final publisher metadata was not accessible; no unverified pages or DOI added.

### datta2026counting

From Early Encoding to Late Suppression: Interpreting LLMs on Character Counting Tasks

Source: https://openreview.net/forum?id=aGdiFNOK82

Status: author-website. Title, authors, venue and year follow the author website. Final publisher metadata was not accessible; no unverified pages or DOI added.

### schlicht2025consistent

Do LLMs Provide Consistent Answers to Health-Related Questions Across Languages?

Source: https://link.springer.com/chapter/10.1007/978-3-031-88714-7_30

Status: source-metadata. 

### chrysostomou-etal-2024-investigating

Investigating Hallucinations in Pruned Large Language Models for Abstractive Summarization

Source: https://aclanthology.org/2024.tacl-1.64.bib

Status: publisher-export. Publisher BibTeX export.

### zhao-aletras-2024-comparing

Comparing Explanation Faithfulness between Multilingual and Monolingual Fine-tuned Language Models

Source: https://aclanthology.org/2024.naacl-long.178.bib

Status: publisher-export. Publisher BibTeX export.

### zhao2024fair

The FAIR database: facilitating access to public health research literature

Source: https://academic.oup.com/jamiaopen/article/7/4/ooae139/7923185

Status: source-metadata. 

### zhao2024reagent

ReAGent: A Model-agnostic Feature Attribution Method for Generative Language Models

Source: https://arxiv.org/abs/2402.00794

Status: source-metadata. Cites the available arXiv record; the website labels this ReLM@AAAI24.

### zhao-aletras-2023-incorporating

Incorporating Attribution Importance for Improving Faithfulness Metrics

Source: https://aclanthology.org/2023.acl-long.261.bib

Status: publisher-export. Publisher BibTeX export.

### zhao-etal-2022-impact

On the Impact of Temporal Concept Drift on Model Explanations

Source: https://aclanthology.org/2022.findings-emnlp.298.bib

Status: publisher-export. Publisher BibTeX export.

### zhao2022subjectivity

Utilizing Subjectivity Level to Mitigate Identity Term Bias in Toxic Comments Classification

Source: https://eprints.whiterose.ac.uk/id/eprint/186277/

Status: source-metadata. 

### zhao2021comparative

A Comparative Study of Using Pre-trained Language Models for Toxic Comment Classification

Source: https://eprints.whiterose.ac.uk/id/eprint/173371/

Status: source-metadata. 

### zhao2019detecting

Detecting Toxic Content Online and the Effect of Training Data on Classification Performance

Source: https://easychair.org/publications/preprint/XGmR

Status: source-metadata. Cites the linked EasyChair preprint; the website labels this CICLing 2019. No unverified proceedings details added.

