# Engine: Aurora

Author: Winston Cai

Home: https://github.com/kjljixx/Aurora-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2400<sub>(-48) | 2804<sub>(+36) | 2886<sub>(+9) |  |
| 1.28.0 | 2026-09-21 | 2448<sub>(+111) | 2768<sub>(+125) | 2877<sub>(+215) |  |
| 1.27.0timehotfix | 2026-05-28 | 2337 | 2643 | 2662 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2385<sub>(+47) | 2731<sub>(+19) | 2799<sub>(-5) |  |
| 1.28.0 | 2026-09-21 | 2338<sub>(+59) | 2712<sub>(+266) | 2804<sub>(+238) |  |
| 1.27.0timehotfix | 2026-05-28 | 2279 | 2446 | 2566 |  |
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

Generated: 2026-11-15 05:36:15

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0", "1.28.1"]
  y-axis "Elo Rating" 2200 --> 2900
  line "E1: STC (8.0+0.08s)" [2337, 2448, 2400]
  line "E1: LTC (60.0+0.60s)" [2643, 2768, 2804]
  line "E1: VLTC (2m24s+1.12s)" [2662, 2877, 2886]
  line "P1: STC (8.0+0.08s)" [2279, 2338, 2385]
  line "P1: LTC (60.0+0.60s)" [2446, 2712, 2731]
  line "P1: VLTC (2m24s+1.12s)" [2566, 2804, 2799]
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
| 1.28.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2799 | 39 | 198 | 50% | 2801 | 40% |
|  |  | E1 | 2886 | 34 | 256 | 50% | 2890 | 43% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2731 | 38 | 240 | 46% | 2772 | 28% |
|  |  | E1 | 2804 | 32 | 308 | 48% | 2819 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2385 | 45 | 168 | 48% | 2406 | 24% |
|  |  | E1 | 2400 | 37 | 254 | 50% | 2400 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2865 | 41 | 188 | 54% | 2824 | 37% |
|  |  | P1 | 2804 | 43 | 164 | 48% | 2822 | 41% |
|  |  | E1 | 2877 | 31 | 338 | 53% | 2846 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2789 | 34 | 280 | 56% | 2738 | 38% |
|  |  | P1 | 2712 | 42 | 188 | 55% | 2627 | 36% |
|  |  | E1 | 2768 | 36 | 240 | 50% | 2772 | 37% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2438 | 39 | 234 | 49% | 2452 | 23% |
|  |  | P1 | 2338 | 43 | 196 | 45% | 2395 | 21% |
|  |  | E1 | 2448 | 42 | 204 | 50% | 2444 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2662 | 36 | 248 | 47% | 2695 | 33% |
|  |  | T1 | 2627 | 28 | 408 | 48% | 2642 | 32% |
|  |  | P1 | 2566 | 33 | 296 | 44% | 2634 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2643 | 37 | 252 | 53% | 2577 | 31% |
|  |  | T1 | 2601 | 28 | 434 | 51% | 2593 | 29% |
|  |  | P1 | 2446 | 42 | 206 | 53% | 2423 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2368 | 28 | 448 | 49% | 2381 | 22% |
|  |  | P1 | 2279 | 43 | 192 | 45% | 2342 | 24% |
|  |  | E1 | 2337 | 39 | 236 | 49% | 2344 | 20% |