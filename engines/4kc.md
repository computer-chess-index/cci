# Engine: 4kc

Author: Gediminas Masaitis

Home: https://github.com/GediminasMasaitis/4k-dot-c

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-06 | 2498<sub>(-41) | 2880<sub>(-6) | 2963<sub>(+25) |  |
| 8.0 | 2026-03-10 | 2539 | 2886 | 2938 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-06 | 2439<sub>(+49) | 2772<sub>(+19) | 2892<sub>(+62) |  |
| 8.0 | 2026-03-10 | 2390 | 2753 | 2830 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-06 | 2549<sub>(-46) | 2870<sub>(+47) | 2970<sub>(+18) |  |
| 8.0 | 2026-03-10 | 2595<sub>(+107) | 2823<sub>(+27) | 2952<sub>(+85) |  |
| 5.0 | 2025-10-30 | 2488 | 2796 | 2867 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+4kc+<version>&body=###%20Engine%20name%0A4kc%0A%0A###%20Version%0A9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-15 05:35:13

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "9.0"]
  y-axis "Elo Rating" 2300 --> 3000
  line "E1: STC (8.0+0.08s)" [2539, 2498]
  line "E1: LTC (60.0+0.60s)" [2886, 2880]
  line "E1: VLTC (2m24s+1.12s)" [2938, 2963]
  line "P1: STC (8.0+0.08s)" [2390, 2439]
  line "P1: LTC (60.0+0.60s)" [2753, 2772]
  line "P1: VLTC (2m24s+1.12s)" [2830, 2892]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "8.0", "9.0"]
  y-axis "Elo Rating" 2400 --> 3000
  line "T1: STC (8.0+0.08s)" [2488, 2595, 2549]
  line "T1: LTC (60.0+0.60s)" [2796, 2823, 2870]
  line "T1: VLTC (2m24s+1.12s)" [2867, 2952, 2970]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2892 | 33 | 292 | 48% | 2903 | 38% |
|  |  | E1 | 2963 | 27 | 426 | 49% | 2958 | 38% |
|  |  | T1 | 2970 | 27 | 436 | 49% | 2984 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2772 | 30 | 376 | 47% | 2766 | 32% |
|  |  | E1 | 2880 | 29 | 392 | 54% | 2813 | 34% |
|  |  | T1 | 2870 | 26 | 450 | 51% | 2858 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2439 | 35 | 266 | 50% | 2431 | 33% |
|  |  | E1 | 2498 | 31 | 364 | 44% | 2576 | 27% |
|  |  | T1 | 2549 | 24 | 562 | 51% | 2545 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2952 | 28 | 402 | 52% | 2931 | 39% |
|  |  | P1 | 2830 | 100 | 38 | 62% | 2684 | 24% |
|  |  | E1 | 2938 | 76 | 60 | 58% | 2866 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2823 | 29 | 374 | 51% | 2813 | 40% |
|  |  | P1 | 2753 | 95 | 44 | 68% | 2479 | 32% |
|  |  | E1 | 2886 | 88 | 52 | 57% | 2754 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2595 | 27 | 456 | 50% | 2588 | 33% |
|  |  | P1 | 2390 | 99 | 44 | 53% | 2338 | 20% |
|  |  | E1 | 2539 | 64 | 92 | 56% | 2450 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2867 | 32 | 296 | 49% | 2880 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2796 | 31 | 324 | 48% | 2811 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2488 | 30 | 396 | 51% | 2483 | 25% |