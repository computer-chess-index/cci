# Engine: Klak

Author: Daniele Marpino

Home: https://github.com/Spunc595/Klak

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-11-14 | 1544<sub>(+120) | 1553<sub>(-16) | 1783<sub>(+131) |  |
| 1.1.0 | 2026-11-08 | 1424<sub>(+12) | 1569<sub>(+72) | 1652<sub>(+32) |  |
| 1.0.0 | 2026-11-06 | 1412 | 1497 | 1620 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-11-14 | 1404<sub>(+12) | 1501<sub>(-64) | 1407<sub>(-201) |  |
| 1.1.0 | 2026-11-08 | 1392<sub>(+139) | 1565<sub>(+85) | 1608<sub>(+45) |  |
| 1.0.0 | 2026-11-06 | 1253 | 1480 | 1563 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0.0 | 2026-11-06 | 1253 | 1480 | 1563 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Klak+<version>&body=###%20Engine%20name%0AKlak%0A%0A###%20Version%0A1.2.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-16 05:39:17

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0"]
  y-axis "Elo Rating" 1200 --> 1800
  line "E1: STC (8.0+0.08s)" [1412, 1424, 1544]
  line "E1: LTC (60.0+0.60s)" [1497, 1569, 1553]
  line "E1: VLTC (2m24s+1.12s)" [1620, 1652, 1783]
  line "P1: STC (8.0+0.08s)" [1253, 1392, 1404]
  line "P1: LTC (60.0+0.60s)" [1480, 1565, 1501]
  line "P1: VLTC (2m24s+1.12s)" [1563, 1608, 1407]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1407 | 278 | 4 | 25% | 1607 | 0% |
|  |  | E1 | 1783 | 125 | 22 | 55% | 1747 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1501 | 158 | 14 | 46% | 1535 | 7% |
|  |  | E1 | 1553 | 124 | 24 | 50% | 1553 | 8% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1404 | 168 | 12 | 46% | 1445 | 8% |
|  |  | E1 | 1544 | 116 | 24 | 58% | 1472 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1608 | 46 | 166 | 53% | 1570 | 19% |
|  |  | E1 | 1652 | 37 | 268 | 49% | 1666 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1565 | 43 | 184 | 53% | 1538 | 24% |
|  |  | E1 | 1569 | 35 | 284 | 49% | 1574 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1392 | 38 | 246 | 58% | 1316 | 20% |
|  |  | E1 | 1424 | 38 | 252 | 47% | 1450 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1563 | 45 | 176 | 65% | 1357 | 36% |
|  |  | E1 | 1620 | 34 | 312 | 57% | 1482 | 34% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1480 | 41 | 212 | 60% | 1338 | 31% |
|  |  | E1 | 1497 | 35 | 280 | 60% | 1350 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1412 | 34 | 304 | 60% | 1269 | 38% |
|  |  | P1 | 1253 | 42 | 196 | 65% | 1061 | 38% |