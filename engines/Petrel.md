# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.5 | 2026-06-02 | 3017<sub>(+new) | 3182<sub>(+new) | 3264<sub>(+new) |  |
| 3.4 | 2026-03-19 |  |  |  |  |
| 2.4 | 2026-03-19 |  |  |  |  |
| 3.3.1 | 2026-02-10 | 2915<sub>(+new) | 3133<sub>(+new) | 3164<sub>(+new) |  |
| 2.3.1 | 2026-02-10 |  |  |  |  |
| 3.3 | 2026-02-09 | 2940<sub>(+new) | 3162<sub>(+new) | 3182<sub>(+new) |  |
| 2.3 | 2026-02-09 |  |  |  |  |
| 2.2 | 2025-12-27 |  |  |  | Rerelease |
| 3.2 | 2025-12-21 | 2909<sub>(+86) | 3104<sub>(+99) | 3158<sub>(+69) |  |
| 3.1 | 2025-11-28 | 2823<sub>(+74) | 3005<sub>(+71) | 3089<sub>(+132) |  |
| 3.0 | 2025-11-26 | 2749<sub>(+535) | 2934<sub>(+534) | 2957<sub>(+482) |  |
| 2.1 | 2025-10-13 | 2214<sub>(+new) | 2400<sub>(+new) | 2475<sub>(+new) |  |
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

Generated: 2026-07-14 06:27:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2214, 2749, 2823, 2909, 2940, 2915, 3017]
  line "STC (8.0+0.08s)" [2214, 2749, 2823, 2909, 2940, 2915, 3017]
  line "LTC (60.0+0.60s)" [2400, 2934, 3005, 3104, 3162, 3133, 3182]
  line "VLTC (2m24s+1.12s)" [2475, 2957, 3089, 3158, 3182, 3164, 3264]
  line "VLTC (2m24s+1.12s)" [2475, 2957, 3089, 3158, 3182, 3164, 3264]
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
  line "STC (8.0+0.08s)" [2214, 2749, 2823, 2909, 2940, 2915, 3017]
  line "STC (8.0+0.08s)" [2214, 2749, 2823, 2909, 2940, 2915, 3017]
  line "LTC (60.0+0.60s)" [2400, 2934, 3005, 3104, 3162, 3133, 3182]
  line "VLTC (2m24s+1.12s)" [2475, 2957, 3089, 3158, 3182, 3164, 3264]
  line "VLTC (2m24s+1.12s)" [2475, 2957, 3089, 3158, 3182, 3164, 3264]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3264 | 28 | 322 | 50% | 3266 | 65% |
| 3.5 | LTC <sub>(60.0+0.60s)</sub> | 3182 | 30 | 308 | 50% | 3167 | 61% |
| 3.5 | STC <sub>(8.0+0.08s)</sub> | 3017 | 31 | 300 | 50% | 3017 | 54% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3164 | 35 | 228 | 52% | 3148 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3133 | 42 | 158 | 53% | 3114 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2915 | 41 | 170 | 49% | 2925 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3182 | 104 | 24 | 58% | 3119 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3162 | 102 | 24 | 54% | 3125 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2940 | 110 | 24 | 50% | 2943 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3158 | 35 | 226 | 49% | 3168 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3104 | 33 | 260 | 52% | 3087 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2909 | 33 | 264 | 50% | 2911 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3089 | 35 | 232 | 51% | 3082 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3005 | 36 | 212 | 52% | 2988 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2823 | 37 | 224 | 48% | 2840 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2957 | 51 | 128 | 57% | 2880 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2934 | 43 | 184 | 59% | 2844 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2749 | 56 | 108 | 53% | 2705 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2475 | 57 | 110 | 48% | 2504 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2400 | 58 | 108 | 48% | 2421 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2214 | 62 | 88 | 51% | 2209 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |