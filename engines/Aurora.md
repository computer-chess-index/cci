# Engine: Aurora

Author: Winston Cai

Home: https://github.com/kjljixx/Aurora-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2434<sub>(-57) | 2850<sub>(+31) | 2930<sub>(+10) |  |
| 1.28.0 | 2026-09-21 | 2491<sub>(+118) | 2819<sub>(+130) | 2920<sub>(+211) |  |
| 1.27.0timehotfix | 2026-05-28 | 2373 | 2689 | 2709 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2539<sub>(+66) | 2905<sub>(+32) | 2990<sub>(-10) |  |
| 1.28.0 | 2026-09-21 | 2473<sub>(+55) | 2873<sub>(+274) | 3000<sub>(+258) |  |
| 1.27.0timehotfix | 2026-05-28 | 2418 | 2599 | 2742 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.0 | 2026-09-21 | 2438<sub>(+70) | 2789<sub>(+188) | 2865<sub>(+238) |  |
| 1.27.0timehotfix | 2026-05-28 | 2368 | 2601 | 2627 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Aurora+<version>&body=###%20Engine%20name%0AAurora%0A%0A###%20Version%0A1.28.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:36:07

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0", "1.28.1"]
  y-axis "Elo Rating" 2300 --> 3000
  line "E1: STC (8.0+0.08s)" [2373, 2491, 2434]
  line "E1: LTC (60.0+0.60s)" [2689, 2819, 2850]
  line "E1: VLTC (2m24s+1.12s)" [2709, 2920, 2930]
  line "P1: STC (8.0+0.08s)" [2418, 2473, 2539]
  line "P1: LTC (60.0+0.60s)" [2599, 2873, 2905]
  line "P1: VLTC (2m24s+1.12s)" [2742, 3000, 2990]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0"]
  y-axis "Elo Rating" 2300 --> 2900
  line "T1: STC (8.0+0.08s)" [2368, 2438]
  line "T1: LTC (60.0+0.60s)" [2601, 2789]
  line "T1: VLTC (2m24s+1.12s)" [2627, 2865]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2930 | 35 | 240 | 51% | 2924 | 45% |
|  |  | P1 | 2990 | 40 | 190 | 51% | 2982 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2850 | 33 | 300 | 49% | 2862 | 35% |
|  |  | P1 | 2905 | 38 | 224 | 47% | 2935 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2434 | 38 | 230 | 52% | 2422 | 27% |
|  |  | P1 | 2539 | 45 | 164 | 49% | 2546 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2865 | 41 | 188 | 54% | 2824 | 37% |
|  |  | P1 | 3000 | 43 | 162 | 48% | 3013 | 41% |
|  |  | E1 | 2920 | 32 | 306 | 54% | 2881 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2789 | 34 | 280 | 56% | 2738 | 38% |
|  |  | P1 | 2873 | 45 | 160 | 56% | 2769 | 38% |
|  |  | E1 | 2819 | 37 | 224 | 50% | 2819 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2438 | 39 | 234 | 49% | 2452 | 23% |
|  |  | P1 | 2473 | 46 | 172 | 44% | 2553 | 20% |
|  |  | E1 | 2491 | 43 | 192 | 51% | 2477 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2742 | 33 | 296 | 44% | 2809 | 36% |
|  |  | E1 | 2709 | 36 | 248 | 47% | 2741 | 33% |
|  |  | T1 | 2627 | 28 | 408 | 48% | 2642 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2599 | 42 | 206 | 53% | 2577 | 24% |
|  |  | E1 | 2689 | 37 | 252 | 53% | 2623 | 31% |
|  |  | T1 | 2601 | 28 | 434 | 51% | 2593 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2373 | 39 | 236 | 49% | 2381 | 20% |
|  |  | T1 | 2368 | 28 | 448 | 49% | 2381 | 22% |
|  |  | P1 | 2418 | 44 | 192 | 45% | 2484 | 24% |