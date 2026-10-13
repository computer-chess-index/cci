# Engine: PurplePanda

Author: Jakob Steininger

Home: https://github.com/Jakob256/PurplePanda

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1561 | 1885 | 1993 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1689 | 1987 | 2087 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1702<sub>(+51) | 2018<sub>(+101) | 2080<sub>(+91) |  |
| 20 | 2025-12-15 | 1651 | 1917 | 1989 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PurplePanda+<version>&body=###%20Engine%20name%0APurplePanda%0A%0A###%20Version%0A21" target="_blank">Submit new version</a>

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

Generated: 2026-10-13 04:42:01

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20", "21"]
  y-axis "Elo Rating" 1600 --> 2100
  line "T1: STC (8.0+0.08s)" [1651, 1702]
  line "T1: LTC (60.0+0.60s)" [1917, 2018]
  line "T1: VLTC (2m24s+1.12s)" [1989, 2080]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 21 | VLTC <sub>(2m24s+1.12s)</sub> | 1993 | 41 | 230 | 49% | 2010 | 14% |
| 21 | VLTC <sub>(2m24s+1.12s)</sub> | 2080 | 34 | 322 | 47% | 2115 | 17% |
| 21 | VLTC <sub>(2m24s+1.12s)</sub> | 2087 | 45 | 182 | 48% | 2114 | 19% |
| 21 | LTC <sub>(60.0+0.60s)</sub> | 1885 | 40 | 226 | 47% | 1921 | 18% |
| 21 | LTC <sub>(60.0+0.60s)</sub> | 2018 | 34 | 312 | 50% | 2033 | 19% |
| 21 | LTC <sub>(60.0+0.60s)</sub> | 1987 | 51 | 144 | 47% | 2034 | 13% |
| 21 | STC <sub>(8.0+0.08s)</sub> | 1561 | 40 | 238 | 48% | 1582 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 21 | STC <sub>(8.0+0.08s)</sub> | 1702 | 33 | 338 | 50% | 1698 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 21 | STC <sub>(8.0+0.08s)</sub> | 1689 | 48 | 168 | 49% | 1705 | 11% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20 | VLTC <sub>(2m24s+1.12s)</sub> | 1989 | 25 | 566 | 48% | 2018 | 21% |
| 20 | LTC <sub>(60.0+0.60s)</sub> | 1917 | 25 | 580 | 50% | 1922 | 17% |
| 20 | STC <sub>(8.0+0.08s)</sub> | 1651 | 25 | 640 | 47% | 1679 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |