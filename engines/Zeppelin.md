# Engine: Zeppelin

Author: Jakub Szczerbinski

Home: https://github.com/jszczerbinsky/zeppelin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-03-27 | 1960<sub>(+136) | 2230<sub>(+124) | 2317<sub>(+54) |  |
| 1.4.2 | 2026-03-22 | 1824<sub>(+14) | 2106<sub>(-62) | 2263<sub>(+41) |  |
| 1.4.1 | 2026-03-15 | 1810<sub>(+4) | 2168<sub>(+115) | 2222<sub>(+5) |  |
| 1.4.0 | 2026-03-14 | 1806<sub>(+160) | 2053<sub>(+102) | 2217<sub>(+188) |  |
| 1.3.0 | 2026-03-05 | 1646<sub>(+65) | 1951<sub>(+137) | 2029<sub>(+57) |  |
| 1.2.0 | 2026-02-09 | 1581<sub>(+73) | 1814<sub>(+102) | 1972<sub>(+131) |  |
| 1.1.0 | 2026-02-03 | 1508<sub>(+333) | 1712<sub>(+123) | 1841<sub>(+193) |  |
| 1.0.0 | 2026-02-01 | 1175<sub>(-35) | 1589<sub>(+161) | 1648<sub>(+114) |  |
| 0.2.0 | 2025-11-16 | 1210<sub>(+new) | 1428<sub>(+new) | 1534<sub>(+new) |  |
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

Generated: 2026-05-18 06:29:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.0", "1.0.0", "1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.4.1", "1.4.2", "1.5.0"]
  y-axis "Elo Rating" 1100 --> 2400
  line "STC (8.0+0.08s)" [1210, 1175, 1508, 1581, 1646, 1806, 1810, 1824, 1960]
  line "STC (8.0+0.08s)" [1210, 1175, 1508, 1581, 1646, 1806, 1810, 1824, 1960]
  line "LTC (60.0+0.60s)" [1428, 1589, 1712, 1814, 1951, 2053, 2168, 2106, 2230]
  line "VLTC (2m24s+1.12s)" [1534, 1648, 1841, 1972, 2029, 2217, 2222, 2263, 2317]
  line "VLTC (2m24s+1.12s)" [1534, 1648, 1841, 1972, 2029, 2217, 2222, 2263, 2317]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2317 | 29 | 402 | 52% | 2302 | 27% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2230 | 28 | 454 | 52% | 2207 | 23% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 1960 | 29 | 456 | 50% | 1960 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2263 | 36 | 278 | 54% | 2222 | 23% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2106 | 36 | 280 | 45% | 2156 | 21% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 1824 | 41 | 208 | 52% | 1802 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2222 | 32 | 340 | 50% | 2226 | 22% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2168 | 39 | 230 | 54% | 2133 | 23% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 1810 | 41 | 216 | 53% | 1781 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2217 | 36 | 272 | 48% | 2238 | 24% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2053 | 40 | 218 | 52% | 2039 | 22% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1806 | 41 | 206 | 51% | 1798 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2029 | 39 | 224 | 50% | 2030 | 22% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 1951 | 39 | 232 | 49% | 1964 | 20% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1646 | 44 | 182 | 49% | 1651 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1972 | 38 | 254 | 46% | 2012 | 17% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1814 | 41 | 216 | 50% | 1812 | 19% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1581 | 43 | 198 | 49% | 1586 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1841 | 38 | 258 | 55% | 1783 | 17% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1712 | 45 | 178 | 47% | 1744 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1508 | 48 | 160 | 53% | 1478 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1648 | 48 | 162 | 51% | 1634 | 12% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1589 | 46 | 178 | 46% | 1629 | 16% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1175 | 65 | 80 | 47% | 1202 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1534 | 37 | 290 | 42% | 1667 | 19% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1428 | 43 | 218 | 48% | 1467 | 15% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 1210 | 118 | 30 | 33% | 1416 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |