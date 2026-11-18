# Engine: Jace

Author: Glen Carbon

Home: https://github.com/jsgroby/jace

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.2 | 2026-11-16 | 1790<sub>(+40) | 2095<sub>(+59) | 2098<sub>(+20) |  |
| 1.5.1 | 2026-11-05 | 1750 | 2036 | 2078 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.2 | 2026-11-16 | 1740<sub>(-27) | 1951<sub>(-17) | 2047<sub>(+40) |  |
| 1.5.1 | 2026-11-05 | 1767 | 1968 | 2007 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.1 | 2026-11-05 | 1767 | 1968 | 2007 |  |
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

Generated: 2026-11-18 05:39:35

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.5.1", "1.5.2"]
  y-axis "Elo Rating" 1700 --> 2100
  line "E1: STC (8.0+0.08s)" [1750, 1790]
  line "E1: LTC (60.0+0.60s)" [2036, 2095]
  line "E1: VLTC (2m24s+1.12s)" [2078, 2098]
  line "P1: STC (8.0+0.08s)" [1767, 1740]
  line "P1: LTC (60.0+0.60s)" [1968, 1951]
  line "P1: VLTC (2m24s+1.12s)" [2007, 2047]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2047 | 80 | 56 | 59% | 1960 | 18% |
|  |  | E1 | 2098 | 53 | 128 | 43% | 2172 | 23% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1951 | 100 | 32 | 45% | 1999 | 28% |
|  |  | E1 | 2095 | 50 | 134 | 47% | 2120 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1790 | 54 | 124 | 46% | 1823 | 19% |
|  |  | P1 | 1740 | 70 | 68 | 53% | 1708 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2007 | 40 | 244 | 44% | 2052 | 18% |
|  |  | E1 | 2078 | 33 | 344 | 46% | 2121 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1968 | 45 | 170 | 48% | 1990 | 24% |
|  |  | E1 | 2036 | 38 | 256 | 51% | 2024 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1767 | 42 | 204 | 52% | 1748 | 20% |
|  |  | E1 | 1750 | 37 | 262 | 50% | 1750 | 18% |