# Engine: Aurora

Author: Winston Cai

Home: https://github.com/kjljixx/Aurora-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2414<sub>(-28) | 2799<sub>(+36) | 2885<sub>(+7) |  |
| 1.28.0 | 2026-09-21 | 2442<sub>(+102) | 2763<sub>(+116) | 2878<sub>(+212) |  |
| 1.27.0timehotfix | 2026-05-28 | 2340 | 2647 | 2666 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2419<sub>(+40) | 2788<sub>(+31) | 2846<sub>(-13) |  |
| 1.28.0 | 2026-09-21 | 2379<sub>(+64) | 2757<sub>(+270) | 2859<sub>(+244) |  |
| 1.27.0timehotfix | 2026-05-28 | 2315 | 2487 | 2615 |  |
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

Generated: 2026-11-28 05:36:21

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0", "1.28.1"]
  y-axis "Elo Rating" 2300 --> 2900
  line "E1: STC (8.0+0.08s)" [2340, 2442, 2414]
  line "E1: LTC (60.0+0.60s)" [2647, 2763, 2799]
  line "E1: VLTC (2m24s+1.12s)" [2666, 2878, 2885]
  line "P1: STC (8.0+0.08s)" [2315, 2379, 2419]
  line "P1: LTC (60.0+0.60s)" [2487, 2757, 2788]
  line "P1: VLTC (2m24s+1.12s)" [2615, 2859, 2846]
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
| 1.28.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2846 | 36 | 230 | 49% | 2857 | 41% |
|  |  | E1 | 2885 | 31 | 320 | 50% | 2890 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2788 | 35 | 276 | 47% | 2820 | 30% |
|  |  | E1 | 2799 | 30 | 362 | 48% | 2816 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2419 | 41 | 204 | 48% | 2444 | 25% |
|  |  | E1 | 2414 | 33 | 312 | 51% | 2410 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2878 | 30 | 354 | 53% | 2850 | 34% |
|  |  | T1 | 2865 | 41 | 188 | 54% | 2824 | 37% |
|  |  | P1 | 2859 | 41 | 172 | 48% | 2878 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2789 | 34 | 280 | 56% | 2738 | 38% |
|  |  | P1 | 2757 | 36 | 246 | 54% | 2692 | 36% |
|  |  | E1 | 2763 | 34 | 268 | 49% | 2774 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2438 | 39 | 234 | 49% | 2452 | 23% |
|  |  | P1 | 2379 | 42 | 212 | 45% | 2438 | 23% |
|  |  | E1 | 2442 | 40 | 232 | 50% | 2448 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2627 | 28 | 408 | 48% | 2642 | 32% |
|  |  | P1 | 2615 | 33 | 296 | 44% | 2681 | 36% |
|  |  | E1 | 2666 | 36 | 248 | 47% | 2697 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2601 | 28 | 434 | 51% | 2593 | 29% |
|  |  | P1 | 2487 | 42 | 206 | 53% | 2464 | 24% |
|  |  | E1 | 2647 | 37 | 252 | 53% | 2581 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2368 | 28 | 448 | 49% | 2381 | 22% |
|  |  | P1 | 2315 | 44 | 192 | 45% | 2379 | 24% |
|  |  | E1 | 2340 | 39 | 236 | 49% | 2348 | 20% |