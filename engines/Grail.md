# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-10-15 | 2897<sub>(+50) | 3239<sub>(+30) | 3348<sub>(+20) |  |
| 2.0.1 | 2026-06-10 | 2847 | 3209 | 3328 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0.0 | 2026-10-15 | 3038<sub>(+42) | 3398<sub>(+70) | 3465<sub>(+58) |  |
| 2.0.1 | 2026-06-10 | 2996 | 3328 | 3407 |  |
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

Generated: 2026-10-20 04:39:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0.1", "3.0.0"]
  y-axis "Elo Rating" 2800 --> 3500
  line "E1: STC (8.0+0.08s)" [2847, 2897]
  line "E1: LTC (60.0+0.60s)" [3209, 3239]
  line "E1: VLTC (2m24s+1.12s)" [3328, 3348]
  line "P1: STC (8.0+0.08s)" [2996, 3038]
  line "P1: LTC (60.0+0.60s)" [3328, 3398]
  line "P1: VLTC (2m24s+1.12s)" [3407, 3465]
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
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3465 | 42 | 144 | 50% | 3468 | 67% |
|  |  | E1 | 3348 | 36 | 198 | 49% | 3357 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3398 | 40 | 176 | 53% | 3371 | 55% |
|  |  | E1 | 3239 | 35 | 226 | 53% | 3216 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3038 | 51 | 112 | 52% | 3019 | 44% |
|  |  | E1 | 2897 | 39 | 190 | 52% | 2884 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3407 | 36 | 216 | 55% | 3305 | 60% |
|  |  | E1 | 3328 | 33 | 274 | 51% | 3303 | 48% |
|  |  | T1 | 3291 | 26 | 420 | 52% | 3278 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3209 | 33 | 274 | 57% | 3093 | 53% |
|  |  | T1 | 3222 | 25 | 432 | 51% | 3213 | 60% |
|  |  | P1 | 3328 | 37 | 216 | 53% | 3278 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2847 | 31 | 336 | 46% | 2886 | 34% |
|  |  | T1 | 2948 | 25 | 480 | 52% | 2934 | 46% |
|  |  | P1 | 2996 | 41 | 176 | 50% | 2994 | 49% |
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