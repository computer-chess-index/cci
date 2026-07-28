# Engine: Zeppelin

Author: Jakub Szczerbinski

Home: https://github.com/jszczerbinsky/zeppelin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-03-27 | 1890<sub>(+105) | 2171<sub>(+119) | 2255<sub>(+50) |  |
| 1.4.2 | 2026-03-22 | 1785<sub>(+12) | 2052<sub>(-62) | 2205<sub>(+41) |  |
| 1.4.1 | 2026-03-15 | 1773<sub>(+6) | 2114<sub>(+111) | 2164<sub>(+7) |  |
| 1.4.0 | 2026-03-14 | 1767<sub>(+152) | 2003<sub>(+98) | 2157<sub>(+177) |  |
| 1.3.0 | 2026-03-05 | 1615<sub>(+60) | 1905<sub>(+130) | 1980<sub>(+56) |  |
| 1.2.0 | 2026-02-09 | 1555<sub>(+66) | 1775<sub>(+98) | 1924<sub>(+120) |  |
| 1.1.0 | 2026-02-03 | 1489<sub>(+323) | 1677<sub>(+116) | 1804<sub>(+187) |  |
| 1.0.0 | 2026-02-01 | 1166<sub>(-31) | 1561<sub>(+149) | 1617<sub>(+109) |  |
| 0.2.0 | 2025-11-16 | 1197<sub>(+new) | 1412<sub>(+new) | 1508<sub>(+new) |  |
| 0.1.1 | 2025-10-12 |  |  |  |  |
| 0.1.0 | 2025-10-11 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zeppelin+<version>&body=###%20Engine%20name%0AZeppelin%0A%0A###%20Version%0A1.5.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-28 06:37:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.0", "1.0.0", "1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.4.1", "1.4.2", "1.5.0"]
  y-axis "Elo Rating" 1100 --> 2300
  line "STC (8.0+0.08s)" [1197, 1166, 1489, 1555, 1615, 1767, 1773, 1785, 1890]
  line "STC (8.0+0.08s)" [1197, 1166, 1489, 1555, 1615, 1767, 1773, 1785, 1890]
  line "LTC (60.0+0.60s)" [1412, 1561, 1677, 1775, 1905, 2003, 2114, 2052, 2171]
  line "VLTC (2m24s+1.12s)" [1508, 1617, 1804, 1924, 1980, 2157, 2164, 2205, 2255]
  line "VLTC (2m24s+1.12s)" [1508, 1617, 1804, 1924, 1980, 2157, 2164, 2205, 2255]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2255 | 27 | 458 | 51% | 2244 | 27% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2171 | 27 | 494 | 52% | 2153 | 23% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 1890 | 26 | 534 | 48% | 1902 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2205 | 36 | 278 | 54% | 2164 | 23% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2052 | 36 | 280 | 45% | 2102 | 21% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 1785 | 41 | 208 | 52% | 1764 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2164 | 32 | 340 | 50% | 2168 | 22% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2114 | 39 | 230 | 54% | 2080 | 23% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 1773 | 41 | 216 | 53% | 1743 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2157 | 36 | 272 | 48% | 2180 | 24% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2003 | 40 | 218 | 52% | 1989 | 22% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1767 | 41 | 206 | 51% | 1760 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1980 | 39 | 224 | 50% | 1980 | 22% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 1905 | 39 | 232 | 49% | 1918 | 20% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1615 | 44 | 182 | 49% | 1620 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1924 | 38 | 254 | 46% | 1963 | 17% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1775 | 41 | 216 | 50% | 1773 | 19% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1555 | 43 | 198 | 49% | 1559 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1804 | 38 | 258 | 55% | 1747 | 17% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1677 | 45 | 178 | 47% | 1708 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1489 | 48 | 160 | 53% | 1459 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1617 | 48 | 162 | 51% | 1604 | 12% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1561 | 46 | 178 | 46% | 1600 | 16% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1166 | 65 | 80 | 47% | 1195 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1508 | 37 | 290 | 42% | 1639 | 19% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1412 | 43 | 218 | 48% | 1449 | 15% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 1197 | 118 | 30 | 33% | 1400 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |