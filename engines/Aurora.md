# Engine: Aurora

Author: Winston Cai

Home: https://github.com/kjljixx/Aurora-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2403<sub>(-43) | 2807<sub>(+35) | 2892<sub>(+12) |  |
| 1.28.0 | 2026-09-21 | 2446<sub>(+109) | 2772<sub>(+125) | 2880<sub>(+212) |  |
| 1.27.0timehotfix | 2026-05-28 | 2337 | 2647 | 2668 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2412<sub>(+37) | 2776<sub>(+25) | 2838<sub>(-11) |  |
| 1.28.0 | 2026-09-21 | 2375<sub>(+72) | 2751<sub>(+274) | 2849<sub>(+242) |  |
| 1.27.0timehotfix | 2026-05-28 | 2303 | 2477 | 2607 |  |
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

Generated: 2026-11-24 05:36:16

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0", "1.28.1"]
  y-axis "Elo Rating" 2300 --> 2900
  line "E1: STC (8.0+0.08s)" [2337, 2446, 2403]
  line "E1: LTC (60.0+0.60s)" [2647, 2772, 2807]
  line "E1: VLTC (2m24s+1.12s)" [2668, 2880, 2892]
  line "P1: STC (8.0+0.08s)" [2303, 2375, 2412]
  line "P1: LTC (60.0+0.60s)" [2477, 2751, 2776]
  line "P1: VLTC (2m24s+1.12s)" [2607, 2849, 2838]
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
| 1.28.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2838 | 37 | 226 | 49% | 2849 | 41% |
|  |  | E1 | 2892 | 31 | 312 | 50% | 2896 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2776 | 36 | 260 | 46% | 2813 | 30% |
|  |  | E1 | 2807 | 31 | 338 | 48% | 2820 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2412 | 41 | 200 | 48% | 2435 | 26% |
|  |  | E1 | 2403 | 34 | 292 | 50% | 2406 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2849 | 41 | 172 | 48% | 2867 | 43% |
|  |  | E1 | 2880 | 30 | 350 | 53% | 2851 | 35% |
|  |  | T1 | 2865 | 41 | 188 | 54% | 2824 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2751 | 38 | 224 | 54% | 2677 | 37% |
|  |  | E1 | 2772 | 35 | 252 | 50% | 2776 | 37% |
|  |  | T1 | 2789 | 34 | 280 | 56% | 2738 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2375 | 42 | 208 | 46% | 2430 | 22% |
|  |  | E1 | 2446 | 42 | 212 | 50% | 2446 | 18% |
|  |  | T1 | 2438 | 39 | 234 | 49% | 2452 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2627 | 28 | 408 | 48% | 2642 | 32% |
|  |  | P1 | 2607 | 33 | 296 | 44% | 2673 | 36% |
|  |  | E1 | 2668 | 36 | 248 | 47% | 2699 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2601 | 28 | 434 | 51% | 2593 | 29% |
|  |  | P1 | 2477 | 42 | 206 | 53% | 2454 | 24% |
|  |  | E1 | 2647 | 37 | 252 | 53% | 2581 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2368 | 28 | 448 | 49% | 2381 | 22% |
|  |  | P1 | 2303 | 44 | 192 | 45% | 2367 | 24% |
|  |  | E1 | 2337 | 39 | 236 | 49% | 2344 | 20% |