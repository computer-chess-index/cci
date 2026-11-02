# Engine: Aurora

Author: Winston Cai

Home: https://github.com/kjljixx/Aurora-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2425<sub>(-74) | 2849<sub>(+14) | 2930<sub>(-2) |  |
| 1.28.0 | 2026-09-21 | 2499<sub>(+120) | 2835<sub>(+136) | 2932<sub>(+213) |  |
| 1.27.0timehotfix | 2026-05-28 | 2379 | 2699 | 2719 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.28.1 | 2026-10-25 | 2520<sub>(+62) | 2920<sub>(+73) | 2961<sub>(-17) |  |
| 1.28.0 | 2026-09-21 | 2458<sub>(+55) | 2847<sub>(+264) | 2978<sub>(+256) |  |
| 1.27.0timehotfix | 2026-05-28 | 2403 | 2583 | 2722 |  |
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

Generated: 2026-11-02 05:36:08

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.27.0timehotfix", "1.28.0", "1.28.1"]
  y-axis "Elo Rating" 2300 --> 3000
  line "E1: STC (8.0+0.08s)" [2379, 2499, 2425]
  line "E1: LTC (60.0+0.60s)" [2699, 2835, 2849]
  line "E1: VLTC (2m24s+1.12s)" [2719, 2932, 2930]
  line "P1: STC (8.0+0.08s)" [2403, 2458, 2520]
  line "P1: LTC (60.0+0.60s)" [2583, 2847, 2920]
  line "P1: VLTC (2m24s+1.12s)" [2722, 2978, 2961]
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
| 1.28.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2930 | 47 | 134 | 49% | 2939 | 43% |
|  |  | P1 | 2961 | 68 | 62 | 48% | 2978 | 47% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2849 | 40 | 192 | 45% | 2886 | 39% |
|  |  | P1 | 2920 | 64 | 80 | 51% | 2908 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2425 | 51 | 124 | 51% | 2419 | 29% |
|  |  | P1 | 2520 | 64 | 80 | 46% | 2556 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.28.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2865 | 41 | 188 | 54% | 2824 | 37% |
|  |  | P1 | 2978 | 43 | 162 | 48% | 2992 | 41% |
|  |  | E1 | 2932 | 32 | 302 | 54% | 2890 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2789 | 34 | 280 | 56% | 2738 | 38% |
|  |  | P1 | 2847 | 45 | 156 | 55% | 2747 | 37% |
|  |  | E1 | 2835 | 38 | 216 | 51% | 2827 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2438 | 39 | 234 | 49% | 2452 | 23% |
|  |  | P1 | 2458 | 46 | 172 | 44% | 2538 | 20% |
|  |  | E1 | 2499 | 43 | 192 | 51% | 2485 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.27.0timehotfix | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2722 | 33 | 296 | 44% | 2789 | 36% |
|  |  | E1 | 2719 | 36 | 248 | 47% | 2750 | 33% |
|  |  | T1 | 2627 | 28 | 408 | 48% | 2642 | 32% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2583 | 42 | 206 | 53% | 2560 | 24% |
|  |  | E1 | 2699 | 37 | 252 | 53% | 2633 | 31% |
|  |  | T1 | 2601 | 28 | 434 | 51% | 2593 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2379 | 39 | 236 | 49% | 2385 | 20% |
|  |  | T1 | 2368 | 28 | 448 | 49% | 2381 | 22% |
|  |  | P1 | 2403 | 44 | 192 | 45% | 2469 | 24% |