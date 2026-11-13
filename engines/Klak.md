# Engine: Klak

Author: Daniele Marpino

Home: https://github.com/Spunc595/Klak

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 1457<sub>(+27) | 1584<sub>(+63) | 1681<sub>(+35) |  |
| 1.0.0 | 2026-11-06 | 1430 | 1521 | 1646 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-08 | 1382<sub>(+145) | 1582<sub>(+104) | 1615<sub>(+53) |  |
| 1.0.0 | 2026-11-06 | 1237 | 1478 | 1562 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2026-11-06 | 1237 | 1478 | 1562 |  |
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

Generated: 2026-11-13 05:39:22

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0"]
  y-axis "Elo Rating" 1200 --> 1700
  line "E1: STC (8.0+0.08s)" [1430, 1457]
  line "E1: LTC (60.0+0.60s)" [1521, 1584]
  line "E1: VLTC (2m24s+1.12s)" [1646, 1681]
  line "P1: STC (8.0+0.08s)" [1237, 1382]
  line "P1: LTC (60.0+0.60s)" [1478, 1582]
  line "P1: VLTC (2m24s+1.12s)" [1562, 1615]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1615 | 48 | 154 | 54% | 1573 | 18% |
|  |  | E1 | 1681 | 37 | 260 | 49% | 1689 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1582 | 45 | 168 | 55% | 1539 | 26% |
|  |  | E1 | 1584 | 36 | 272 | 49% | 1593 | 22% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1382 | 39 | 238 | 57% | 1315 | 20% |
|  |  | E1 | 1457 | 39 | 232 | 48% | 1476 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1562 | 46 | 168 | 64% | 1365 | 36% |
|  |  | E1 | 1646 | 35 | 296 | 58% | 1493 | 33% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1521 | 35 | 272 | 60% | 1369 | 42% |
|  |  | P1 | 1478 | 43 | 196 | 61% | 1330 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1430 | 35 | 284 | 61% | 1274 | 38% |
|  |  | P1 | 1237 | 46 | 168 | 67% | 1026 | 36% |