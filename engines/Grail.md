# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-10-15 | 2873<sub>(+46) | 3217<sub>(+30) | 3330<sub>(+24) |  |
| 2.0.1 | 2026-06-10 | 2827 | 3187 | 3306 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-10-15 | 3012<sub>(+43) | 3374<sub>(+75) | 3434<sub>(+55) |  |
| 2.0.1 | 2026-06-10 | 2969 | 3299 | 3379 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-10 | 2948<sub>(+32) | 3222<sub>(+45) | 3291<sub>(+21) |  |
| 2.0.0 | 2026-05-11 | 2916<sub>(+103) | 3177<sub>(+88) | 3270<sub>(+83) |  |
| 1.1.0 | 2026-02-28 | 2813<sub>(+355) | 3089<sub>(+362) | 3187<sub>(+324) |  |
| 1.0.4 | 2026-01-16 | 2458<sub>(+128) | 2727<sub>(+38) | 2863<sub>(+101) |  |
| 1.0.3 | 2026-01-04 | 2330<sub>(+26) | 2689<sub>(+115) | 2762<sub>(+74) |  |
| 1.0.2 | 2025-12-16 | 2304<sub>(+27) | 2574<sub>(+21) | 2688<sub>(-54) |  |
| 1.0.1 | 2025-12-10 | 2277<sub>(+36) | 2553<sub>(-15) | 2742<sub>(-54) |  |
| 1.0.0 | 2025-12-05 | 2241 | 2568 | 2796 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Grail+<version>&body=###%20Engine%20name%0AGrail%0A%0A###%20Version%0A2.0.1" target="_blank">Submit new version</a>

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

Generated: 2026-10-19 04:38:59

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.1", "3.0.0"]
  y-axis "Elo Rating" 2800 --> 3500
  line "E1: STC (8.0+0.08s)" [2827, 2873]
  line "E1: LTC (60.0+0.60s)" [3187, 3217]
  line "E1: VLTC (2m24s+1.12s)" [3306, 3330]
  line "P1: STC (8.0+0.08s)" [2969, 3012]
  line "P1: LTC (60.0+0.60s)" [3299, 3374]
  line "P1: VLTC (2m24s+1.12s)" [3379, 3434]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "T1: STC (8.0+0.08s)" [2241, 2277, 2304, 2330, 2458, 2813, 2916, 2948]
  line "T1: LTC (60.0+0.60s)" [2568, 2553, 2574, 2689, 2727, 3089, 3177, 3222]
  line "T1: VLTC (2m24s+1.12s)" [2796, 2742, 2688, 2762, 2863, 3187, 3270, 3291]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3434 | 43 | 140 | 49% | 3438 | 67% |
|  |  | E1 | 3330 | 37 | 186 | 49% | 3336 | 69% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3374 | 41 | 168 | 54% | 3341 | 54% |
|  |  | E1 | 3217 | 35 | 222 | 53% | 3194 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2873 | 41 | 174 | 51% | 2863 | 47% |
|  |  | P1 | 3012 | 52 | 110 | 52% | 2992 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3291 | 26 | 420 | 52% | 3278 | 57% |
|  |  | P1 | 3379 | 36 | 216 | 55% | 3278 | 60% |
|  |  | E1 | 3306 | 33 | 274 | 51% | 3283 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3222 | 25 | 432 | 51% | 3213 | 60% |
|  |  | P1 | 3299 | 37 | 216 | 53% | 3249 | 53% |
|  |  | E1 | 3187 | 33 | 274 | 57% | 3071 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2948 | 25 | 480 | 52% | 2934 | 46% |
|  |  | P1 | 2969 | 41 | 176 | 50% | 2967 | 49% |
|  |  | E1 | 2827 | 31 | 336 | 46% | 2866 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3270 | 29 | 316 | 51% | 3263 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3177 | 29 | 322 | 48% | 3189 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2916 | 29 | 352 | 52% | 2896 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3187 | 27 | 392 | 53% | 3167 | 53% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3089 | 28 | 356 | 51% | 3075 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2813 | 28 | 398 | 51% | 2803 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2863 | 34 | 272 | 49% | 2871 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2727 | 35 | 252 | 50% | 2728 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2458 | 31 | 348 | 55% | 2414 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2762 | 43 | 172 | 50% | 2766 | 31% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2689 | 45 | 160 | 51% | 2682 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2330 | 44 | 172 | 51% | 2323 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2688 | 38 | 214 | 50% | 2689 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2574 | 35 | 264 | 46% | 2612 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2304 | 41 | 212 | 55% | 2260 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2742 | 42 | 180 | 52% | 2727 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2553 | 40 | 202 | 53% | 2526 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2277 | 50 | 142 | 48% | 2296 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2796 | 61 | 92 | 42% | 2866 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2568 | 59 | 92 | 46% | 2601 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2241 | 67 | 82 | 59% | 2157 | 20% |