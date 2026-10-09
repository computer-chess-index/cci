# Engine: 4kc

Author: Gediminas Masaitis

Home: https://github.com/GediminasMasaitis/4k-dot-c

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-06 | 2456 | 2809 | 2896 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 9.0 | 2026-06-06 | 2608 | 3009 | 3120 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

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

Generated: 2026-10-09 14:07:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "8.0", "9.0"]
  y-axis "Elo Rating" 2400 --> 3000
  line "" [2488, 2595, 2549]
  line "STC (8.0+0.08s)" [2488, 2595, 2549]
  line "LTC (60.0+0.60s)" [2796, 2823, 2870]
  line "" [2867, 2952, 2970]
  line "VLTC (2m24s+1.12s)" [2867, 2952, 2970]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2970 | 27 | 436 | 49% | 2984 | 40% |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3120 | 38 | 218 | 50% | 3105 | 38% |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2896 | 35 | 266 | 51% | 2867 | 36% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 2870 | 26 | 450 | 51% | 2858 | 42% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3009 | 43 | 188 | 52% | 2951 | 30% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 2809 | 39 | 232 | 56% | 2697 | 31% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 2549 | 24 | 562 | 51% | 2545 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 2608 | 42 | 182 | 47% | 2631 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 2456 | 38 | 240 | 47% | 2496 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2952 | 28 | 402 | 52% | 2931 | 39% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 2823 | 29 | 374 | 51% | 2813 | 40% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2595 | 27 | 456 | 50% | 2588 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2867 | 32 | 296 | 49% | 2880 | 39% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2796 | 31 | 324 | 48% | 2811 | 37% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2488 | 30 | 396 | 51% | 2483 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |