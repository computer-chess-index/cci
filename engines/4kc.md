# Engine: 4kc

Author: Gediminas Masaitis

Home: https://github.com/GediminasMasaitis/4k-dot-c

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-06 | 2500<sub>(-15) | 2881<sub>(+31) | 2974<sub>(+35) |  |
| 8.0 | 2026-03-10 | 2515 | 2850 | 2939 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-06 | 2475<sub>(+30) | 2824<sub>(+44) | 2923<sub>(+49) |  |
| 8.0 | 2026-03-10 | 2445 | 2780 | 2874 |  |
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

Generated: 2026-11-24 05:35:09

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0", "9.0"]
  y-axis "Elo Rating" 2400 --> 3000
  line "E1: STC (8.0+0.08s)" [2515, 2500]
  line "E1: LTC (60.0+0.60s)" [2850, 2881]
  line "E1: VLTC (2m24s+1.12s)" [2939, 2974]
  line "P1: STC (8.0+0.08s)" [2445, 2475]
  line "P1: LTC (60.0+0.60s)" [2780, 2824]
  line "P1: VLTC (2m24s+1.12s)" [2874, 2923]
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
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2974 | 27 | 446 | 50% | 2963 | 37% |
|  |  | T1 | 2970 | 27 | 436 | 49% | 2984 | 40% |
|  |  | P1 | 2923 | 30 | 344 | 47% | 2944 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2881 | 28 | 432 | 53% | 2822 | 35% |
|  |  | T1 | 2870 | 26 | 450 | 51% | 2858 | 42% |
|  |  | P1 | 2824 | 28 | 428 | 48% | 2817 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2500 | 29 | 404 | 44% | 2573 | 27% |
|  |  | T1 | 2549 | 24 | 562 | 51% | 2545 | 33% |
|  |  | P1 | 2475 | 34 | 282 | 50% | 2465 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2952 | 28 | 402 | 52% | 2931 | 39% |
|  |  | P1 | 2874 | 73 | 66 | 57% | 2789 | 32% |
|  |  | E1 | 2939 | 56 | 102 | 53% | 2904 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2823 | 29 | 374 | 51% | 2813 | 40% |
|  |  | P1 | 2780 | 65 | 88 | 60% | 2638 | 28% |
|  |  | E1 | 2850 | 60 | 100 | 51% | 2809 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2595 | 27 | 456 | 50% | 2588 | 33% |
|  |  | P1 | 2445 | 67 | 84 | 54% | 2361 | 25% |
|  |  | E1 | 2515 | 56 | 120 | 52% | 2476 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2867 | 32 | 296 | 49% | 2880 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2796 | 31 | 324 | 48% | 2811 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2488 | 30 | 396 | 51% | 2483 | 25% |