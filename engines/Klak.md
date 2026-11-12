# Engine: Klak

Author: Daniele Marpino

Home: https://github.com/Spunc595/Klak

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 1469<sub>(+33) | 1592<sub>(+65) | 1692<sub>(+33) |  |
| 1.0.0 | 2026-11-06 | 1436 | 1527 | 1659 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 1392<sub>(+166) | 1632<sub>(+121) | 1628<sub>(+23) |  |
| 1.0.0 | 2026-11-06 | 1226 | 1511 | 1605 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2026-11-06 | 1226 | 1511 | 1605 |  |
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

Generated: 2026-11-12 05:39:04

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0"]
  y-axis "Elo Rating" 1200 --> 1700
  line "E1: STC (8.0+0.08s)" [1436, 1469]
  line "E1: LTC (60.0+0.60s)" [1527, 1592]
  line "E1: VLTC (2m24s+1.12s)" [1659, 1692]
  line "P1: STC (8.0+0.08s)" [1226, 1392]
  line "P1: LTC (60.0+0.60s)" [1511, 1632]
  line "P1: VLTC (2m24s+1.12s)" [1605, 1628]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1628 | 51 | 136 | 49% | 1638 | 20% |
|  |  | E1 | 1692 | 38 | 244 | 49% | 1705 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1632 | 46 | 164 | 54% | 1593 | 26% |
|  |  | E1 | 1592 | 36 | 264 | 49% | 1601 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1392 | 39 | 234 | 56% | 1331 | 21% |
|  |  | E1 | 1469 | 39 | 228 | 48% | 1486 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1605 | 46 | 164 | 63% | 1405 | 37% |
|  |  | E1 | 1659 | 35 | 292 | 59% | 1501 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1511 | 43 | 196 | 61% | 1361 | 32% |
|  |  | E1 | 1527 | 36 | 264 | 60% | 1377 | 42% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1226 | 48 | 156 | 65% | 1031 | 37% |
|  |  | E1 | 1436 | 36 | 272 | 61% | 1281 | 38% |