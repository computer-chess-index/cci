# Engine: Zeppelin

Author: Jakub Szczerbinski

Home: https://github.com/jszczerbinsky/zeppelin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-03-27 | 1962<sub>(+138) | 2234<sub>(+127) | 2319<sub>(+54) |  |
| 1.4.2 | 2026-03-22 | 1824<sub>(+14) | 2107<sub>(-62) | 2265<sub>(+42) |  |
| 1.4.1 | 2026-03-15 | 1810<sub>(+4) | 2169<sub>(+113) | 2223<sub>(+5) |  |
| 1.4.0 | 2026-03-14 | 1806<sub>(+159) | 2056<sub>(+104) | 2218<sub>(+188) |  |
| 1.3.0 | 2026-03-05 | 1647<sub>(+65) | 1952<sub>(+136) | 2030<sub>(+56) |  |
| 1.2.0 | 2026-02-09 | 1582<sub>(+73) | 1816<sub>(+103) | 1974<sub>(+131) |  |
| 1.1.0 | 2026-02-03 | 1509<sub>(+334) | 1713<sub>(+123) | 1843<sub>(+195) |  |
| 1.0.0 | 2026-02-01 | 1175<sub>(-35) | 1590<sub>(+160) | 1648<sub>(+114) |  |
| 0.2.0 | 2025-11-16 | 1210<sub>(+new) | 1430<sub>(+new) | 1534<sub>(+new) |  |
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

Generated: 2026-05-16 06:29:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.0", "1.0.0", "1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.4.1", "1.4.2", "1.5.0"]
  y-axis "Elo Rating" 1100 --> 2400
  line "STC (8.0+0.08s)" [1210, 1175, 1509, 1582, 1647, 1806, 1810, 1824, 1962]
  line "STC (8.0+0.08s)" [1210, 1175, 1509, 1582, 1647, 1806, 1810, 1824, 1962]
  line "LTC (60.0+0.60s)" [1430, 1590, 1713, 1816, 1952, 2056, 2169, 2107, 2234]
  line "VLTC (2m24s+1.12s)" [1534, 1648, 1843, 1974, 2030, 2218, 2223, 2265, 2319]
  line "VLTC (2m24s+1.12s)" [1534, 1648, 1843, 1974, 2030, 2218, 2223, 2265, 2319]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2319 | 29 | 402 | 52% | 2304 | 27% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2234 | 28 | 454 | 52% | 2210 | 23% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 1962 | 29 | 444 | 49% | 1963 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2265 | 36 | 278 | 54% | 2223 | 23% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2107 | 36 | 280 | 45% | 2159 | 21% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 1824 | 41 | 208 | 52% | 1804 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2223 | 32 | 340 | 50% | 2228 | 22% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2169 | 39 | 230 | 54% | 2136 | 23% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 1810 | 41 | 216 | 53% | 1782 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2218 | 36 | 272 | 48% | 2240 | 24% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2056 | 40 | 218 | 52% | 2040 | 22% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1806 | 41 | 206 | 51% | 1800 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2030 | 39 | 224 | 50% | 2032 | 22% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 1952 | 39 | 232 | 49% | 1966 | 20% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1647 | 44 | 182 | 49% | 1652 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1974 | 38 | 254 | 46% | 2013 | 17% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1816 | 41 | 216 | 50% | 1813 | 19% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1582 | 43 | 198 | 49% | 1588 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1843 | 38 | 258 | 55% | 1785 | 17% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1713 | 45 | 178 | 47% | 1744 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1509 | 48 | 160 | 53% | 1478 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1648 | 48 | 162 | 51% | 1635 | 12% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1590 | 46 | 178 | 46% | 1631 | 16% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1175 | 65 | 80 | 47% | 1203 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1534 | 37 | 290 | 42% | 1669 | 19% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1430 | 43 | 218 | 48% | 1467 | 15% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 1210 | 118 | 30 | 33% | 1416 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |