# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.5 | 2026-06-02 | 2998<sub>(+new) | 3186<sub>(+new) | 3267<sub>(+new) |  |
| 3.4 | 2026-03-19 |  |  |  |  |
| 2.4 | 2026-03-19 |  |  |  |  |
| 3.3.1 | 2026-02-10 | 2908<sub>(+new) | 3127<sub>(+new) | 3159<sub>(+new) |  |
| 2.3.1 | 2026-02-10 |  |  |  |  |
| 3.3 | 2026-02-09 | 2932<sub>(+new) | 3156<sub>(+new) | 3177<sub>(+new) |  |
| 2.3 | 2026-02-09 |  |  |  |  |
| 2.2 | 2025-12-27 |  |  |  | Rerelease |
| 3.2 | 2025-12-21 | 2904<sub>(+87) | 3098<sub>(+98) | 3152<sub>(+69) |  |
| 3.1 | 2025-11-28 | 2817<sub>(+72) | 3000<sub>(+72) | 3083<sub>(+132) |  |
| 3.0 | 2025-11-26 | 2745<sub>(+531) | 2928<sub>(+529) | 2951<sub>(+479) |  |
| 2.1 | 2025-10-13 | 2214<sub>(+new) | 2399<sub>(+new) | 2472<sub>(+new) |  |
| 1,4.1 | 2025-10-10 |  |  |  |  |
| 1,3,1 | 2025-09-13 |  |  |  |  |
| 1,2 | 2025-09-08 |  |  |  |  |
| 1.0 | 2025-08-14 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Petrel+<version>&body=###%20Engine%20name%0APetrel%0A%0A###%20Version%0A3.5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-18 06:30:28

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2214, 2745, 2817, 2904, 2932, 2908, 2998]
  line "STC (8.0+0.08s)" [2214, 2745, 2817, 2904, 2932, 2908, 2998]
  line "LTC (60.0+0.60s)" [2399, 2928, 3000, 3098, 3156, 3127, 3186]
  line "VLTC (2m24s+1.12s)" [2472, 2951, 3083, 3152, 3177, 3159, 3267]
  line "VLTC (2m24s+1.12s)" [2472, 2951, 3083, 3152, 3177, 3159, 3267]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2214, 2745, 2817, 2904, 2932, 2908, 2998]
  line "STC (8.0+0.08s)" [2214, 2745, 2817, 2904, 2932, 2908, 2998]
  line "LTC (60.0+0.60s)" [2399, 2928, 3000, 3098, 3156, 3127, 3186]
  line "VLTC (2m24s+1.12s)" [2472, 2951, 3083, 3152, 3177, 3159, 3267]
  line "VLTC (2m24s+1.12s)" [2472, 2951, 3083, 3152, 3177, 3159, 3267]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3267 | 36 | 200 | 51% | 3260 | 67% |
| 3.5 | LTC <sub>(60.0+0.60s)</sub> | 3186 | 35 | 220 | 52% | 3155 | 60% |
| 3.5 | STC <sub>(8.0+0.08s)</sub> | 2998 | 35 | 228 | 49% | 3008 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3159 | 35 | 228 | 52% | 3143 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3127 | 42 | 158 | 53% | 3108 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2908 | 41 | 170 | 49% | 2919 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3177 | 104 | 24 | 58% | 3113 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3156 | 102 | 24 | 54% | 3120 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2932 | 110 | 24 | 50% | 2936 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3152 | 35 | 226 | 49% | 3163 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3098 | 33 | 260 | 52% | 3082 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2904 | 33 | 264 | 50% | 2905 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3083 | 35 | 232 | 51% | 3077 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3000 | 36 | 212 | 52% | 2981 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2817 | 37 | 224 | 48% | 2835 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2951 | 51 | 128 | 57% | 2874 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2928 | 43 | 184 | 59% | 2839 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2745 | 56 | 108 | 53% | 2701 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2472 | 57 | 110 | 48% | 2503 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2399 | 58 | 108 | 48% | 2418 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2214 | 62 | 88 | 51% | 2207 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |