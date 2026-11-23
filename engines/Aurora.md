# Engine: Aurora

Author: Winston Cai

Home: https://github.com/kjljixx/Aurora-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2404<sub>(-41) | 2807<sub>(+38) | 2892<sub>(+14) |  |
| 1.28.0 | 2026-09-21 | 2445<sub>(+109) | 2769<sub>(+123) | 2878<sub>(+212) |  |
| 1.27.0timehotfix | 2026-05-28 | 2336 | 2646 | 2666 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2408<sub>(+36) | 2776<sub>(+27) | 2832<sub>(-12) |  |
| 1.28.0 | 2026-09-21 | 2372<sub>(+70) | 2749<sub>(+273) | 2844<sub>(+240) |  |
| 1.27.0timehotfix | 2026-05-28 | 2302 | 2476 | 2604 |  |
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

Generated: 2026-11-23 05:36:14

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0", "1.28.1"]
  y-axis "Elo Rating" 2300 --> 2900
  line "E1: STC (8.0+0.08s)" [2336, 2445, 2404]
  line "E1: LTC (60.0+0.60s)" [2646, 2769, 2807]
  line "E1: VLTC (2m24s+1.12s)" [2666, 2878, 2892]
  line "P1: STC (8.0+0.08s)" [2302, 2372, 2408]
  line "P1: LTC (60.0+0.60s)" [2476, 2749, 2776]
  line "P1: VLTC (2m24s+1.12s)" [2604, 2844, 2832]
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
| 1.28.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2832 | 37 | 226 | 49% | 2843 | 41% |
|  |  | E1 | 2892 | 32 | 296 | 50% | 2894 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2776 | 36 | 256 | 46% | 2811 | 30% |
|  |  | E1 | 2807 | 31 | 334 | 48% | 2820 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2408 | 42 | 196 | 48% | 2431 | 25% |
|  |  | E1 | 2404 | 35 | 288 | 51% | 2404 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2844 | 41 | 172 | 48% | 2863 | 43% |
|  |  | E1 | 2878 | 31 | 342 | 53% | 2850 | 35% |
|  |  | T1 | 2865 | 41 | 188 | 54% | 2824 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2769 | 36 | 248 | 49% | 2774 | 37% |
|  |  | T1 | 2789 | 34 | 280 | 56% | 2738 | 38% |
|  |  | P1 | 2749 | 38 | 224 | 54% | 2676 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2445 | 42 | 212 | 50% | 2445 | 18% |
|  |  | T1 | 2438 | 39 | 234 | 49% | 2452 | 23% |
|  |  | P1 | 2372 | 42 | 208 | 46% | 2427 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2627 | 28 | 408 | 48% | 2642 | 32% |
|  |  | P1 | 2604 | 33 | 296 | 44% | 2670 | 36% |
|  |  | E1 | 2666 | 36 | 248 | 47% | 2697 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2601 | 28 | 434 | 51% | 2593 | 29% |
|  |  | P1 | 2476 | 42 | 206 | 53% | 2452 | 24% |
|  |  | E1 | 2646 | 37 | 252 | 53% | 2580 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2368 | 28 | 448 | 49% | 2381 | 22% |
|  |  | P1 | 2302 | 44 | 192 | 45% | 2365 | 24% |
|  |  | E1 | 2336 | 39 | 236 | 49% | 2342 | 20% |