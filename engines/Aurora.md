# Engine: Aurora

Author: Winston Cai

Home: https://github.com/kjljixx/Aurora-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2462<sub>(-57) | 2882<sub>(+23) | 2962<sub>(+5) |  |
| 1.28.0 | 2026-09-21 | 2519<sub>(+117) | 2859<sub>(+139) | 2957<sub>(+215) |  |
| 1.27.0timehotfix | 2026-05-28 | 2402 | 2720 | 2742 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2527<sub>(+66) | 2903<sub>(+46) | 2981<sub>(-9) |  |
| 1.28.0 | 2026-09-21 | 2461<sub>(+54) | 2857<sub>(+269) | 2990<sub>(+259) |  |
| 1.27.0timehotfix | 2026-05-28 | 2407 | 2588 | 2731 |  |
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

Generated: 2026-11-11 05:36:07

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0", "1.28.1"]
  y-axis "Elo Rating" 2400 --> 3000
  line "E1: STC (8.0+0.08s)" [2402, 2519, 2462]
  line "E1: LTC (60.0+0.60s)" [2720, 2859, 2882]
  line "E1: VLTC (2m24s+1.12s)" [2742, 2957, 2962]
  line "P1: STC (8.0+0.08s)" [2407, 2461, 2527]
  line "P1: LTC (60.0+0.60s)" [2588, 2857, 2903]
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
|  |  | E1 | 2962 | 35 | 236 | 51% | 2955 | 44% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2882 | 33 | 300 | 49% | 2894 | 35% |
|  |  | P1 | 2903 | 43 | 184 | 47% | 2930 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2462 | 38 | 226 | 52% | 2450 | 27% |
|  |  | P1 | 2527 | 45 | 164 | 49% | 2534 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2865 | 41 | 188 | 54% | 2824 | 37% |
|  |  | P1 | 2990 | 43 | 162 | 48% | 3004 | 41% |
|  |  | E1 | 2957 | 32 | 302 | 54% | 2915 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2789 | 34 | 280 | 56% | 2738 | 38% |
|  |  | P1 | 2857 | 45 | 156 | 55% | 2757 | 37% |
|  |  | E1 | 2859 | 38 | 216 | 51% | 2851 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2438 | 39 | 234 | 49% | 2452 | 23% |
|  |  | P1 | 2461 | 46 | 172 | 44% | 2542 | 20% |
|  |  | E1 | 2519 | 43 | 192 | 51% | 2507 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2731 | 33 | 296 | 44% | 2799 | 36% |
|  |  | E1 | 2742 | 36 | 248 | 47% | 2773 | 33% |
|  |  | T1 | 2627 | 28 | 408 | 48% | 2642 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2588 | 42 | 206 | 53% | 2565 | 24% |
|  |  | E1 | 2720 | 37 | 252 | 53% | 2654 | 31% |
|  |  | T1 | 2601 | 28 | 434 | 51% | 2593 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2407 | 44 | 192 | 45% | 2473 | 24% |
|  |  | E1 | 2402 | 39 | 236 | 49% | 2408 | 20% |
|  |  | T1 | 2368 | 28 | 448 | 49% | 2381 | 22% |