# Engine: Klak

Author: Daniele Marpino

Home: https://github.com/Spunc595/Klak

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 1486<sub>(+37) | 1608<sub>(+64) | 1708<sub>(+33) |  |
| 1.0.0 | 2026-11-06 | 1449 | 1544 | 1675 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 1382<sub>(+167) | 1623<sub>(+120) | 1619<sub>(+23) |  |
| 1.0.0 | 2026-11-06 | 1215 | 1503 | 1596 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2026-11-06 | 1215 | 1503 | 1596 |  |
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

Generated: 2026-11-11 05:39:06

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0"]
  y-axis "Elo Rating" 1200 --> 1800
  line "E1: STC (8.0+0.08s)" [1449, 1486]
  line "E1: LTC (60.0+0.60s)" [1544, 1608]
  line "E1: VLTC (2m24s+1.12s)" [1675, 1708]
  line "P1: STC (8.0+0.08s)" [1215, 1382]
  line "P1: LTC (60.0+0.60s)" [1503, 1623]
  line "P1: VLTC (2m24s+1.12s)" [1596, 1619]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1708 | 39 | 232 | 48% | 1725 | 19% |
|  |  | P1 | 1619 | 51 | 136 | 49% | 1629 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1623 | 46 | 164 | 54% | 1584 | 26% |
|  |  | E1 | 1608 | 37 | 260 | 49% | 1617 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1382 | 39 | 234 | 56% | 1323 | 21% |
|  |  | E1 | 1486 | 39 | 228 | 48% | 1503 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1596 | 46 | 164 | 63% | 1397 | 37% |
|  |  | E1 | 1675 | 35 | 292 | 59% | 1516 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1503 | 43 | 196 | 61% | 1353 | 32% |
|  |  | E1 | 1544 | 36 | 260 | 60% | 1391 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1215 | 48 | 156 | 65% | 1022 | 37% |
|  |  | E1 | 1449 | 36 | 268 | 61% | 1291 | 38% |