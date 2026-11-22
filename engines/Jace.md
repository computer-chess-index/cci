# Engine: Jace

Author: Glen Carbon

Home: https://github.com/jsgroby/jace

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.2 | 2026-11-16 | 1781<sub>(+30) | 2041<sub>(+5) | 2102<sub>(+22) |  |
| 1.5.1 | 2026-11-05 | 1751<sub>(+38) | 2036<sub>(+108) | 2080<sub>(+27) |  |
| 1.4 | 2026-10-15 | 1713 | 1928 | 2053 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.2 | 2026-11-16 | 1728<sub>(-39) | 1982<sub>(+14) | 2013<sub>(0) |  |
| 1.5.1 | 2026-11-05 | 1767 | 1968 | 2013 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-11-05 | 1767 | 1968 | 2013 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Jace+<version>&body=###%20Engine%20name%0AJace%0A%0A###%20Version%0A1.5.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:39:11

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.5.1", "1.5.2"]
  y-axis "Elo Rating" 1700 --> 2200
  line "E1: STC (8.0+0.08s)" [1713, 1751, 1781]
  line "E1: LTC (60.0+0.60s)" [1928, 2036, 2041]
  line "E1: VLTC (2m24s+1.12s)" [2053, 2080, 2102]
  line "P1: STC (8.0+0.08s)" [1767, 1728]
  line "P1: LTC (60.0+0.60s)" [1968, 1982]
  line "P1: VLTC (2m24s+1.12s)" [2013, 2013]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2013 | 47 | 160 | 50% | 2017 | 21% |
|  |  | E1 | 2102 | 44 | 188 | 44% | 2178 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1982 | 59 | 92 | 51% | 1982 | 29% |
|  |  | E1 | 2041 | 36 | 286 | 44% | 2145 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1728 | 60 | 92 | 51% | 1715 | 26% |
|  |  | E1 | 1781 | 47 | 164 | 47% | 1809 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2013 | 40 | 244 | 44% | 2059 | 18% |
|  |  | E1 | 2080 | 33 | 344 | 46% | 2122 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2036 | 38 | 256 | 51% | 2024 | 20% |
|  |  | P1 | 1968 | 44 | 178 | 48% | 1993 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1751 | 37 | 262 | 50% | 1751 | 18% |
|  |  | P1 | 1767 | 42 | 204 | 52% | 1750 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2053 | 47 | 158 | 53% | 2022 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 1928 | 48 | 150 | 53% | 1904 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1713 | 60 | 98 | 48% | 1727 | 19% |