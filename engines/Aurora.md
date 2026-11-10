# Engine: Aurora

Author: Winston Cai

Home: https://github.com/kjljixx/Aurora-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2446<sub>(-58) | 2866<sub>(+22) | 2948<sub>(+8) |  |
| 1.28.0 | 2026-09-21 | 2504<sub>(+119) | 2844<sub>(+139) | 2940<sub>(+214) |  |
| 1.27.0timehotfix | 2026-05-28 | 2385 | 2705 | 2726 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2526<sub>(+65) | 2930<sub>(+73) | 2981<sub>(-9) |  |
| 1.28.0 | 2026-09-21 | 2461<sub>(+54) | 2857<sub>(+270) | 2990<sub>(+259) |  |
| 1.27.0timehotfix | 2026-05-28 | 2407 | 2587 | 2731 |  |
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

Generated: 2026-11-10 05:36:09

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0", "1.28.1"]
  y-axis "Elo Rating" 2300 --> 3000
  line "E1: STC (8.0+0.08s)" [2385, 2504, 2446]
  line "E1: LTC (60.0+0.60s)" [2705, 2844, 2866]
  line "E1: VLTC (2m24s+1.12s)" [2726, 2940, 2948]
  line "P1: STC (8.0+0.08s)" [2407, 2461, 2526]
  line "P1: LTC (60.0+0.60s)" [2587, 2857, 2930]
  line "P1: VLTC (2m24s+1.12s)" [2731, 2990, 2981]
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
| 1.28.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2981 | 40 | 190 | 51% | 2973 | 41% |
|  |  | E1 | 2948 | 36 | 232 | 51% | 2942 | 44% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2930 | 45 | 160 | 50% | 2932 | 29% |
|  |  | E1 | 2866 | 33 | 296 | 48% | 2880 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2446 | 38 | 226 | 52% | 2434 | 27% |
|  |  | P1 | 2526 | 45 | 164 | 49% | 2534 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2865 | 41 | 188 | 54% | 2824 | 37% |
|  |  | P1 | 2990 | 43 | 162 | 48% | 3004 | 41% |
|  |  | E1 | 2940 | 32 | 302 | 54% | 2898 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2789 | 34 | 280 | 56% | 2738 | 38% |
|  |  | P1 | 2857 | 45 | 156 | 55% | 2755 | 37% |
|  |  | E1 | 2844 | 38 | 216 | 51% | 2836 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2438 | 39 | 234 | 49% | 2452 | 23% |
|  |  | P1 | 2461 | 46 | 172 | 44% | 2541 | 20% |
|  |  | E1 | 2504 | 43 | 192 | 51% | 2491 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2627 | 28 | 408 | 48% | 2642 | 32% |
|  |  | P1 | 2731 | 33 | 296 | 44% | 2799 | 36% |
|  |  | E1 | 2726 | 36 | 248 | 47% | 2758 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2587 | 42 | 206 | 53% | 2565 | 24% |
|  |  | E1 | 2705 | 37 | 252 | 53% | 2638 | 31% |
|  |  | T1 | 2601 | 28 | 434 | 51% | 2593 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2407 | 44 | 192 | 45% | 2473 | 24% |
|  |  | E1 | 2385 | 39 | 236 | 49% | 2392 | 20% |
|  |  | T1 | 2368 | 28 | 448 | 49% | 2381 | 22% |