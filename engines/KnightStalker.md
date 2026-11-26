# Engine: KnightStalker

Author: Ted Summers

Home: https://github.com/tedsummers/KnightStalker

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5.0 | 2026-11-24 | 1800<sub>(+337) | 2056<sub>(+310) | 2074<sub>(+276) |  |
| 1.1.0 | 2026-11-15 | 1463 | 1746 | 1798 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5.0 | 2026-11-24 | 1801<sub>(+323) | 1958<sub>(+277) | 2101<sub>(+370) |  |
| 1.1.0 | 2026-11-15 | 1478 | 1681 | 1731 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-11-15 | 1478 | 1681 | 1731 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+KnightStalker+<version>&body=###%20Engine%20name%0AKnightStalker%0A%0A###%20Version%0A2.5.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-26 05:39:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "2.5.0"]
  y-axis "Elo Rating" 1400 --> 2200
  line "E1: STC (8.0+0.08s)" [1463, 1800]
  line "E1: LTC (60.0+0.60s)" [1746, 2056]
  line "E1: VLTC (2m24s+1.12s)" [1798, 2074]
  line "P1: STC (8.0+0.08s)" [1478, 1801]
  line "P1: LTC (60.0+0.60s)" [1681, 1958]
  line "P1: VLTC (2m24s+1.12s)" [1731, 2101]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2101 | 57 | 104 | 55% | 2056 | 29% |
|  |  | E1 | 2074 | 48 | 146 | 53% | 2041 | 30% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1958 | 59 | 104 | 51% | 1944 | 20% |
|  |  | E1 | 2056 | 50 | 134 | 57% | 1991 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1801 | 113 | 32 | 64% | 1648 | 9% |
|  |  | E1 | 1800 | 46 | 172 | 48% | 1818 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1798 | 43 | 192 | 51% | 1808 | 20% |
|  |  | P1 | 1731 | 55 | 118 | 45% | 1794 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1746 | 46 | 180 | 48% | 1794 | 19% |
|  |  | P1 | 1681 | 48 | 148 | 51% | 1674 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1478 | 50 | 148 | 43% | 1608 | 24% |
|  |  | E1 | 1463 | 44 | 196 | 46% | 1534 | 20% |