# Engine: Gyatso

Author: Gyatso Neesham

Home: https://github.com/GyatsoYT/GyatsoChess

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-06-05 | 2557 | 2919 | 3047 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-06-05 | 2873 | 3144 | 3287 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6.0 | 2026-09-25 | 3197<sub>(+513) | 3395<sub>(+355) | 3422<sub>(+299) |  |
| 1.4.0 | 2026-06-05 | 2684<sub>(+186) | 3040<sub>(+216) | 3123<sub>(+193) |  |
| 1.3.0 | 2026-03-30 | 2498<sub>(+365) | 2824<sub>(+382) | 2930<sub>(+403) |  |
| 1.2.0 | 2026-01-24 | 2133<sub>(+166) | 2442<sub>(+121) | 2527<sub>(+117) |  |
| 1.1.0 | 2026-01-09 | 1967 | 2321 | 2410 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Gyatso+<version>&body=###%20Engine%20name%0AGyatso%0A%0A###%20Version%0A1.6.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-11 10:13:33

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.6.0"]
  y-axis "Elo Rating" 1900 --> 3500
  line "" [1967, 2133, 2498, 2684, 3197]
  line "T1: STC (8.0+0.08s)" [1967, 2133, 2498, 2684, 3197]
  line "T1: LTC (60.0+0.60s)" [2321, 2442, 2824, 3040, 3395]
  line "" [2410, 2527, 2930, 3123, 3422]
  line "T1: VLTC (2m24s+1.12s)" [2410, 2527, 2930, 3123, 3422]
  line "" [1967, 2133, 2498, 2684,2557]
  line "E1: STC (8.0+0.08s)" [1967, 2133, 2498, 2684,2557]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3422 | 36 | 198 | 56% | 3372 | 74% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 3395 | 34 | 232 | 50% | 3386 | 64% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 3197 | 30 | 304 | 48% | 3201 | 57% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3123 | 27 | 408 | 50% | 3123 | 46% |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3287 | 41 | 164 | 48% | 3305 | 55% |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3047 | 32 | 268 | 49% | 3055 | 52% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3040 | 27 | 404 | 51% | 3033 | 45% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 3144 | 39 | 210 | 51% | 3131 | 39% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2919 | 31 | 294 | 45% | 2957 | 48% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2684 | 27 | 448 | 48% | 2704 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2873 | 42 | 180 | 53% | 2843 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2557 | 36 | 252 | 45% | 2601 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2930 | 25 | 492 | 47% | 2952 | 39% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2824 | 30 | 358 | 50% | 2819 | 39% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2498 | 25 | 576 | 43% | 2558 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2527 | 33 | 312 | 52% | 2507 | 24% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2442 | 35 | 274 | 51% | 2429 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2133 | 33 | 328 | 52% | 2114 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2410 | 45 | 172 | 49% | 2425 | 23% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2321 | 43 | 208 | 50% | 2321 | 16% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1967 | 49 | 148 | 49% | 1983 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |