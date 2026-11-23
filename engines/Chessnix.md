# Engine: Chessnix

Author: Langedijk Eric

Home: https://github.com/ericlangedijk/chessnix/

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-28 | 2838<sub>(+65) | 3249<sub>(+116) | 3141<sub>(-81) |  |
| 1.4b | 2026-04-28 | 2773 | 3133 | 3222 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-28 | 2774<sub>(-3) | 3256<sub>(+143) | 3131<sub>(-20) |  |
| 1.4b | 2026-04-28 | 2777 | 3113 | 3151 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-28 | 2885<sub>(+15) | 3148<sub>(+73) | 3241<sub>(+67) |  |
| 1.3 | 2026-02-15 | 2870<sub>(+255) | 3075<sub>(+294) | 3174<sub>(+226) |  |
| 1.2 | 2025-12-12 | 2615<sub>(+285) | 2781<sub>(+171) | 2948<sub>(+263) |  |
| 1.0 | 2025-11-08 | 2330 | 2610 | 2685 | too many irregular games |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chessnix+<version>&body=###%20Engine%20name%0AChessnix%0A%0A###%20Version%0A1.4" target="_blank">Submit new version</a>

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

Generated: 2026-11-23 05:37:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.4b"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2838, 2773]
  line "E1: LTC (60.0+0.60s)" [3249, 3133]
  line "E1: VLTC (2m24s+1.12s)" [3141, 3222]
  line "P1: STC (8.0+0.08s)" [2774, 2777]
  line "P1: LTC (60.0+0.60s)" [3256, 3113]
  line "P1: VLTC (2m24s+1.12s)" [3131, 3151]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3", "1.4"]
  y-axis "Elo Rating" 2300 --> 3300
  line "T1: STC (8.0+0.08s)" [2330, 2615, 2870, 2885]
  line "T1: LTC (60.0+0.60s)" [2610, 2781, 3075, 3148]
  line "T1: VLTC (2m24s+1.12s)" [2685, 2948, 3174, 3241]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3131 | 118 | 26 | 65% | 2935 | 31% |
|  |  | E1 | 3141 | 103 | 32 | 63% | 3035 | 31% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4b |  | P1 | 3151 | 35 | 226 | 48% | 3156 | 58% |
|  |  | E1 | 3222 | 30 | 331 | 53% | 3198 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 |  | T1 | 3241 | 41 | 160 | 53% | 3221 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3256 | 136 | 16 | 59% | 3156 | 44% |
|  |  | E1 | 3249 | 109 | 26 | 33% | 3389 | 42% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4b |  | P1 | 3113 | 44 | 158 | 52% | 3078 | 44% |
|  |  | E1 | 3133 | 28 | 366 | 50% | 3125 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 |  | T1 | 3148 | 43 | 164 | 51% | 3139 | 43% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2838 | 89 | 38 | 41% | 2911 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4b |  | P1 | 2777 | 40 | 190 | 51% | 2770 | 44% |
|  |  | E1 | 2773 | 29 | 402 | 46% | 2805 | 35% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 |  | T1 | 2885 | 44 | 156 | 49% | 2896 | 40% |
|  |  | P1 | 2774 | 100 | 36 | 58% | 2672 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3174 | 100 | 26 | 56% | 3132 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3075 | 75 | 52 | 46% | 3100 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2870 | 123 | 22 | 52% | 2847 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2948 | 158 | 12 | 46% | 2986 | 25% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2781 | 79 | 52 | 52% | 2763 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2615 | 150 | 16 | 63% | 2495 | 13% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2685 | 101 | 32 | 33% | 2828 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2610 | 146 | 16 | 41% | 2695 | 19% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2330 | 71 | 70 | 41% | 2406 | 23% |