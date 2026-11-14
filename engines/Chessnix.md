# Engine: Chessnix

Author: Langedijk Eric

Home: https://github.com/ericlangedijk/chessnix/

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4b | 2026-04-28 | 2768<sub>(-136) | 3127<sub>(-291) | 3216<sub>(+210) |  |
| 1.4 | 2026-04-28 | 2904 | 3418 | 3006 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4b | 2026-04-28 | 2747<sub>(+127) | 3096<sub>(-102) | 3137<sub>(+106) |  |
| 1.4 | 2026-04-28 | 2620 | 3198 | 3031 |  |
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

Generated: 2026-11-14 05:37:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4b", "1.4"]
  y-axis "Elo Rating" 2600 --> 3500
  line "E1: STC (8.0+0.08s)" [2768, 2904]
  line "E1: LTC (60.0+0.60s)" [3127, 3418]
  line "E1: VLTC (2m24s+1.12s)" [3216, 3006]
  line "P1: STC (8.0+0.08s)" [2747, 2620]
  line "P1: LTC (60.0+0.60s)" [3096, 3198]
  line "P1: VLTC (2m24s+1.12s)" [3137, 3031]
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
| 1.4b | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3137 | 35 | 220 | 48% | 3141 | 58% |
|  |  | E1 | 3216 | 30 | 323 | 53% | 3187 | 46% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 |  | T1 | 3241 | 41 | 160 | 53% | 3221 | 56% |
|  |  | P1 | 3031 | 151 | 16 | 72% | 2765 | 31% |
|  |  | E1 | 3006 | 146 | 14 | 61% | 2932 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4b | LTC <sub>(60.0+0.60s)</sub> | P1 | 3096 | 45 | 150 | 52% | 3056 | 43% |
|  |  | E1 | 3127 | 29 | 352 | 50% | 3119 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 |  | T1 | 3148 | 43 | 164 | 51% | 3139 | 43% |
|  |  | P1 | 3198 | 167 | 10 | 70% | 3031 | 40% |
|  |  | E1 | 3418 | 174 | 8 | 50% | 3424 | 50% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4b | STC <sub>(8.0+0.08s)</sub> | E1 | 2768 | 30 | 372 | 46% | 2800 | 35% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 |  | T1 | 2885 | 44 | 156 | 49% | 2896 | 40% |
|  |  | P1 | 2620 | 170 | 14 | 57% | 2562 | 29% |
|  |  | E1 | 2904 | 124 | 20 | 45% | 2938 | 30% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4b |  | P1 | 2747 | 42 | 170 | 52% | 2731 | 45% |
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