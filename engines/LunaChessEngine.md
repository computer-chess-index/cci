# Engine: LunaChessEngine

Author: Daniele Marpino

Home: https://github.com/Spunc595/Luna-Chess-Engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2770<sub>(+13) | 3128<sub>(-26) | 3256<sub>(+55) |  |
| 4.1.1 | 2026-11-02 | 2757<sub>(-1) | 3154<sub>(+30) | 3201<sub>(-11) |  |
| 4.1.0 | 2026-10-16 | 2758 | 3124 | 3212 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.2.0 | 2026-11-04 | 2773<sub>(+5) | 3097<sub>(+18) | 3185<sub>(+30) |  |
| 4.1.1 | 2026-11-02 | 2768<sub>(+48) | 3079<sub>(-21) | 3155<sub>(-24) |  |
| 4.1.0 | 2026-10-16 | 2720 | 3100 | 3179 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1.0 | 2026-10-16 | 2720 | 3100 | 3179 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+LunaChessEngine+<version>&body=###%20Engine%20name%0ALunaChessEngine%0A%0A###%20Version%0A4.2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-19 05:40:10

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1.0", "4.1.1", "4.2.0"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2758, 2757, 2770]
  line "E1: LTC (60.0+0.60s)" [3124, 3154, 3128]
  line "E1: VLTC (2m24s+1.12s)" [3212, 3201, 3256]
  line "P1: STC (8.0+0.08s)" [2720, 2768, 2773]
  line "P1: LTC (60.0+0.60s)" [3100, 3079, 3097]
  line "P1: VLTC (2m24s+1.12s)" [3179, 3155, 3185]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3185 | 36 | 196 | 49% | 3191 | 68% |
|  |  | E1 | 3256 | 25 | 402 | 48% | 3268 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3097 | 38 | 180 | 48% | 3113 | 61% |
|  |  | E1 | 3128 | 32 | 262 | 50% | 3129 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2773 | 40 | 196 | 46% | 2803 | 40% |
|  |  | E1 | 2770 | 34 | 280 | 47% | 2777 | 39% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3155 | 36 | 212 | 50% | 3160 | 58% |
|  |  | E1 | 3201 | 33 | 248 | 50% | 3204 | 59% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3079 | 40 | 180 | 53% | 3060 | 48% |
|  |  | E1 | 3154 | 38 | 188 | 51% | 3143 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2768 | 44 | 166 | 52% | 2747 | 36% |
|  |  | E1 | 2757 | 35 | 264 | 49% | 2768 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3179 | 38 | 190 | 52% | 3140 | 60% |
|  |  | E1 | 3212 | 32 | 280 | 56% | 3135 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3100 | 42 | 174 | 56% | 2944 | 48% |
|  |  | E1 | 3124 | 33 | 294 | 58% | 2975 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2758 | 34 | 298 | 57% | 2529 | 36% |
|  |  | P1 | 2720 | 38 | 240 | 54% | 2561 | 35% |