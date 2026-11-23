# Engine: Jace

Author: Glen Carbon

Home: https://github.com/jsgroby/jace

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.2 | 2026-11-16 | 1781<sub>(+30) | 2040<sub>(+6) | 2101<sub>(+22) |  |
| 1.5.1 | 2026-11-05 | 1751<sub>(+39) | 2034<sub>(+78) | 2079<sub>(+26) |  |
| 1.4 | 2026-10-15 | 1712 | 1956 | 2053 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.2 | 2026-11-16 | 1740<sub>(-31) | 1982<sub>(+10) | 2026<sub>(+10) |  |
| 1.5.1 | 2026-11-05 | 1771<sub>(-8) | 1972<sub>(+6) | 2016<sub>(-32) |  |
| 1.4 | 2026-10-15 | 1779 | 1966 | 2048 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-10-15 | 1779 | 1966 | 2048 |  |
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

Generated: 2026-11-23 05:39:16

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.5.1", "1.5.2"]
  y-axis "Elo Rating" 1700 --> 2200
  line "E1: STC (8.0+0.08s)" [1712, 1751, 1781]
  line "E1: LTC (60.0+0.60s)" [1956, 2034, 2040]
  line "E1: VLTC (2m24s+1.12s)" [2053, 2079, 2101]
  line "P1: STC (8.0+0.08s)" [1779, 1771, 1740]
  line "P1: LTC (60.0+0.60s)" [1966, 1972, 1982]
  line "P1: VLTC (2m24s+1.12s)" [2048, 2016, 2026]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2026 | 45 | 176 | 51% | 2018 | 19% |
|  |  | E1 | 2101 | 44 | 188 | 44% | 2176 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1982 | 58 | 96 | 50% | 1986 | 29% |
|  |  | E1 | 2040 | 36 | 286 | 44% | 2144 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1740 | 59 | 96 | 52% | 1717 | 25% |
|  |  | E1 | 1781 | 47 | 164 | 47% | 1808 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2016 | 40 | 244 | 44% | 2061 | 18% |
|  |  | E1 | 2079 | 33 | 344 | 46% | 2121 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1972 | 44 | 178 | 48% | 1995 | 24% |
|  |  | E1 | 2034 | 38 | 256 | 51% | 2024 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1771 | 42 | 204 | 52% | 1752 | 20% |
|  |  | E1 | 1751 | 37 | 262 | 50% | 1750 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2048 | 74 | 64 | 54% | 2012 | 20% |
|  |  | E1 | 2053 | 45 | 178 | 53% | 2028 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1966 | 72 | 64 | 52% | 1951 | 25% |
|  |  | E1 | 1956 | 36 | 262 | 52% | 1935 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1779 | 90 | 44 | 56% | 1723 | 16% |
|  |  | E1 | 1712 | 51 | 138 | 49% | 1721 | 17% |