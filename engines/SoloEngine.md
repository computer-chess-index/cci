# Engine: SoloEngine

Author: Yunus Emre Yıldız

Home: https://github.com/yunusemreyldz07/SoloEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-06-06 | 2849<sub>(+new) | 3123<sub>(+new) | 3222<sub>(+new) |  |
| 2.1.0 | 2026-04-14 |  |  |  |  |
| 2.0.0 | 2026-03-23 | 2261<sub>(+97) | 2601<sub>(+145) | 2743<sub>(+150) |  |
| 1.6.0 | 2026-03-14 | 2164<sub>(+148) | 2456<sub>(+134) | 2593<sub>(+163) |  |
| 1.5.0 | 2026-03-04 | 2016<sub>(+254) | 2322<sub>(+246) | 2430<sub>(+236) |  |
| 1.4.0 | 2026-02-07 | 1762<sub>(+133) | 2076<sub>(+102) | 2194<sub>(+126) |  |
| 1.3.1 | 2026-02-01 | 1629<sub>(-25) | 1974<sub>(+19) | 2068<sub>(+51) |  |
| 1.2.2 | 2026-01-23 | 1654 | 1955 | 2017 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+SoloEngine+<version>&body=###%20Engine%20name%0ASoloEngine%0A%0A###%20Version%0A2.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-12 08:13:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0", "2.2.0"]
  y-axis "Elo Rating" 1600 --> 3300
  line "STC (8.0+0.08s)" [1654, 1629, 1762, 2016, 2164, 2261, 2849]
  line "STC (8.0+0.08s)" [1654, 1629, 1762, 2016, 2164, 2261, 2849]
  line "LTC (60.0+0.60s)" [1955, 1974, 2076, 2322, 2456, 2601, 3123]
  line "VLTC (2m24s+1.12s)" [2017, 2068, 2194, 2430, 2593, 2743, 3222]
  line "VLTC (2m24s+1.12s)" [2017, 2068, 2194, 2430, 2593, 2743, 3222]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3222 | 27 | 364 | 50% | 3220 | 63% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3123 | 30 | 326 | 53% | 3092 | 54% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2849 | 27 | 426 | 51% | 2839 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2743 | 27 | 436 | 52% | 2726 | 32% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2601 | 31 | 328 | 49% | 2606 | 34% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2261 | 31 | 348 | 52% | 2244 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2593 | 34 | 280 | 50% | 2589 | 36% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2456 | 32 | 332 | 51% | 2445 | 30% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2164 | 35 | 288 | 49% | 2182 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2430 | 30 | 380 | 48% | 2449 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2322 | 37 | 252 | 52% | 2306 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2016 | 35 | 288 | 54% | 1975 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2194 | 36 | 264 | 49% | 2203 | 28% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2076 | 40 | 206 | 53% | 2055 | 33% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1762 | 43 | 180 | 51% | 1754 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2068 | 40 | 204 | 52% | 2053 | 31% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 1974 | 46 | 164 | 51% | 1968 | 23% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1629 | 42 | 208 | 47% | 1655 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2017 | 38 | 260 | 46% | 2087 | 24% |
| 1.2.2 | LTC <sub>(60.0+0.60s)</sub> | 1955 | 43 | 204 | 46% | 2018 | 20% |
| 1.2.2 | STC <sub>(8.0+0.08s)</sub> | 1654 | 41 | 232 | 47% | 1709 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |