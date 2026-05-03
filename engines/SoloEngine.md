# Engine: SoloEngine

Author: Yunus Emre Yıldız

Home: https://github.com/yunusemreyldz07/SoloEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-04-14 |  |  |  |  |
| 2.0.0 | 2026-03-23 | 2321<sub>(+99) | 2662<sub>(+143) | 2804<sub>(+150) |  |
| 1.6.0 | 2026-03-14 | 2222<sub>(+158) | 2519<sub>(+135) | 2654<sub>(+162) |  |
| 1.5.0 | 2026-03-04 | 2064<sub>(+267) | 2384<sub>(+256) | 2492<sub>(+240) |  |
| 1.4.0 | 2026-02-07 | 1797<sub>(+138) | 2128<sub>(+108) | 2252<sub>(+132) |  |
| 1.3.1 | 2026-02-01 | 1659<sub>(-24) | 2020<sub>(+19) | 2120<sub>(+53) |  |
| 1.2.2 | 2026-01-23 | 1683 | 2001 | 2067 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+SoloEngine+<version>&body=###%20Engine%20name%0ASoloEngine%0A%0A###%20Version%0A2.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-03 07:46:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0"]
  y-axis "Elo Rating" 1600 --> 2900
  line "STC (8.0+0.08s)" [1683, 1659, 1797, 2064, 2222, 2321]
  line "STC (8.0+0.08s)" [1683, 1659, 1797, 2064, 2222, 2321]
  line "LTC (60.0+0.60s)" [2001, 2020, 2128, 2384, 2519, 2662]
  line "VLTC (2m24s+1.12s)" [2067, 2120, 2252, 2492, 2654, 2804]
  line "VLTC (2m24s+1.12s)" [2067, 2120, 2252, 2492, 2654, 2804]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 |  |  |  |  |  |  |  |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2804 | 27 | 436 | 52% | 2786 | 32% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2662 | 31 | 328 | 49% | 2668 | 34% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2321 | 31 | 348 | 52% | 2303 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2654 | 34 | 280 | 50% | 2650 | 36% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2519 | 32 | 332 | 51% | 2507 | 30% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2222 | 35 | 288 | 49% | 2240 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2492 | 30 | 380 | 48% | 2512 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2384 | 37 | 252 | 52% | 2368 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2064 | 35 | 288 | 54% | 2024 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2252 | 36 | 264 | 49% | 2261 | 28% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2128 | 40 | 206 | 53% | 2106 | 33% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1797 | 43 | 180 | 51% | 1787 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2120 | 40 | 204 | 52% | 2105 | 31% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2020 | 46 | 164 | 51% | 2013 | 23% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1659 | 42 | 208 | 47% | 1685 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2067 | 38 | 260 | 46% | 2137 | 24% |
| 1.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2001 | 43 | 204 | 46% | 2066 | 20% |
| 1.2.2 | STC <sub>(8.0+0.08s)</sub> | 1683 | 41 | 232 | 47% | 1740 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |