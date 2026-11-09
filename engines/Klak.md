# Engine: Klak

Author: Daniele Marpino

Home: https://github.com/Spunc595/Klak

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 1470<sub>(+35) | 1621<sub>(+93) | 1727<sub>(+73) |  |
| 1.0.0 | 2026-11-06 | 1435 | 1528 | 1654 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 1243<sub>(+32) | 1586<sub>(+82) | 1678<sub>(+76) |  |
| 1.0.0 | 2026-11-06 | 1211 | 1504 | 1602 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2026-11-06 | 1211 | 1504 | 1602 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Klak+<version>&body=###%20Engine%20name%0AKlak%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-09 05:39:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0"]
  y-axis "Elo Rating" 1200 --> 1800
  line "E1: STC (8.0+0.08s)" [1435, 1470]
  line "E1: LTC (60.0+0.60s)" [1528, 1621]
  line "E1: VLTC (2m24s+1.12s)" [1654, 1727]
  line "P1: STC (8.0+0.08s)" [1211, 1243]
  line "P1: LTC (60.0+0.60s)" [1504, 1586]
  line "P1: VLTC (2m24s+1.12s)" [1602, 1678]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1727 | 91 | 42 | 50% | 1727 | 19% |
|  |  | P1 | 1678 | 90 | 44 | 56% | 1620 | 16% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1586 | 71 | 68 | 54% | 1551 | 22% |
|  |  | E1 | 1621 | 76 | 58 | 48% | 1631 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1243 | 94 | 40 | 50% | 1241 | 15% |
|  |  | E1 | 1470 | 71 | 74 | 45% | 1528 | 14% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1602 | 47 | 160 | 64% | 1392 | 36% |
|  |  | E1 | 1654 | 35 | 288 | 59% | 1497 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1504 | 43 | 196 | 61% | 1354 | 32% |
|  |  | E1 | 1528 | 36 | 260 | 60% | 1376 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1211 | 48 | 156 | 65% | 1018 | 37% |
|  |  | E1 | 1435 | 36 | 264 | 61% | 1276 | 38% |