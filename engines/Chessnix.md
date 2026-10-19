# Engine: Chessnix

Author: Langedijk Eric

Home: https://github.com/ericlangedijk/chessnix/

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4b | 2026-04-28 | 2746 | 3112 | 3208 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4b | 2026-04-28 | 2820 | 3220 | 3262 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4b | 2026-04-28 | 2885<sub>(+15) | 3148<sub>(+73) | 3241<sub>(+67) |  |
| 1.3 | 2026-02-15 | 2870<sub>(+255) | 3075<sub>(+294) | 3174<sub>(+226) |  |
| 1.2 | 2025-12-12 | 2615<sub>(+285) | 2781<sub>(+171) | 2948<sub>(+263) |  |
| 1.0 | 2025-11-08 | 2330 | 2610 | 2685 | too many irregular games |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chessnix+<version>&body=###%20Engine%20name%0AChessnix%0A%0A###%20Version%0A1.4b" target="_blank">Submit new version</a>

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

Generated: 2026-10-19 04:37:14

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.2", "1.3", "1.4b"]
  y-axis "Elo Rating" 2300 --> 3300
  line "T1: STC (8.0+0.08s)" [2330, 2615, 2870, 2885]
  line "T1: LTC (60.0+0.60s)" [2610, 2781, 3075, 3148]
  line "T1: VLTC (2m24s+1.12s)" [2685, 2948, 3174, 3241]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4b | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3208 | 36 | 227 | 55% | 3163 | 44% |
|  |  | T1 | 3241 | 41 | 160 | 53% | 3221 | 56% |
|  |  | P1 | 3262 | 41 | 166 | 48% | 3259 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3112 | 32 | 296 | 50% | 3101 | 48% |
|  |  | T1 | 3148 | 43 | 164 | 51% | 3139 | 43% |
|  |  | P1 | 3220 | 56 | 102 | 54% | 3150 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2885 | 44 | 156 | 49% | 2896 | 40% |
|  |  | P1 | 2820 | 52 | 108 | 48% | 2835 | 47% |
|  |  | E1 | 2746 | 34 | 282 | 45% | 2790 | 37% |
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