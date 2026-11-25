# Engine: Jace

Author: Glen Carbon

Home: https://github.com/jsgroby/jace

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.2 | 2026-11-16 | 1762<sub>(+8) | 2044<sub>(+5) | 2111<sub>(+29) |  |
| 1.5.1 | 2026-11-05 | 1754<sub>(+52) | 2039<sub>(+67) | 2082<sub>(+22) |  |
| 1.4 | 2026-10-15 | 1702 | 1972 | 2060 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.2 | 2026-11-16 | 1746<sub>(-32) | 1987<sub>(+9) | 2033<sub>(+9) |  |
| 1.5.1 | 2026-11-05 | 1778<sub>(+63) | 1978<sub>(+49) | 2024<sub>(-17) |  |
| 1.4 | 2026-10-15 | 1715 | 1929 | 2041 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-10-15 | 1715 | 1929 | 2041 |  |
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

Generated: 2026-11-25 05:39:23

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.5.1", "1.5.2"]
  y-axis "Elo Rating" 1700 --> 2200
  line "E1: STC (8.0+0.08s)" [1702, 1754, 1762]
  line "E1: LTC (60.0+0.60s)" [1972, 2039, 2044]
  line "E1: VLTC (2m24s+1.12s)" [2060, 2082, 2111]
  line "P1: STC (8.0+0.08s)" [1715, 1778, 1746]
  line "P1: LTC (60.0+0.60s)" [1929, 1978, 1987]
  line "P1: VLTC (2m24s+1.12s)" [2041, 2024, 2033]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2033 | 45 | 176 | 51% | 2025 | 19% |
|  |  | E1 | 2111 | 43 | 196 | 45% | 2176 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1987 | 57 | 100 | 50% | 1991 | 30% |
|  |  | E1 | 2044 | 36 | 286 | 44% | 2148 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1746 | 57 | 104 | 52% | 1724 | 23% |
|  |  | E1 | 1762 | 46 | 174 | 45% | 1812 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2082 | 33 | 344 | 46% | 2125 | 21% |
|  |  | P1 | 2024 | 40 | 244 | 44% | 2070 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2039 | 38 | 256 | 51% | 2026 | 20% |
|  |  | P1 | 1978 | 44 | 178 | 48% | 2002 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1754 | 37 | 262 | 50% | 1754 | 18% |
|  |  | P1 | 1778 | 42 | 204 | 52% | 1760 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2041 | 60 | 100 | 52% | 2026 | 19% |
|  |  | E1 | 2060 | 44 | 186 | 53% | 2032 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1929 | 57 | 104 | 48% | 1947 | 25% |
|  |  | E1 | 1972 | 35 | 282 | 54% | 1940 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1715 | 53 | 124 | 49% | 1727 | 20% |
|  |  | E1 | 1702 | 49 | 150 | 47% | 1728 | 17% |