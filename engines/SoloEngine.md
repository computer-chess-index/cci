# Engine: SoloEngine

Author: Yunus Emre Yıldız

Home: https://github.com/yunusemreyldz07/SoloEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1.0 | 2026-04-14 |  |  |  |  |
| 2.0.0 | 2026-03-23 | 2325<sub>(+99) | 2666<sub>(+144) | 2808<sub>(+148) |  |
| 1.6.0 | 2026-03-14 | 2226<sub>(+159) | 2522<sub>(+134) | 2660<sub>(+164) |  |
| 1.5.0 | 2026-03-04 | 2067<sub>(+267) | 2388<sub>(+256) | 2496<sub>(+240) |  |
| 1.4.0 | 2026-02-07 | 1800<sub>(+138) | 2132<sub>(+110) | 2256<sub>(+132) |  |
| 1.3.1 | 2026-02-01 | 1662<sub>(-24) | 2022<sub>(+17) | 2124<sub>(+53) |  |
| 1.2.2 | 2026-01-23 | 1686 | 2005 | 2071 |  |
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

Generated: 2026-05-16 06:28:24

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0"]
  y-axis "Elo Rating" 1600 --> 2900
  line "STC (8.0+0.08s)" [1686, 1662, 1800, 2067, 2226, 2325]
  line "STC (8.0+0.08s)" [1686, 1662, 1800, 2067, 2226, 2325]
  line "LTC (60.0+0.60s)" [2005, 2022, 2132, 2388, 2522, 2666]
  line "VLTC (2m24s+1.12s)" [2071, 2124, 2256, 2496, 2660, 2808]
  line "VLTC (2m24s+1.12s)" [2071, 2124, 2256, 2496, 2660, 2808]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2808 | 27 | 436 | 52% | 2792 | 32% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2666 | 31 | 328 | 49% | 2672 | 34% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2325 | 31 | 348 | 52% | 2307 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2660 | 34 | 280 | 50% | 2654 | 36% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2522 | 32 | 332 | 51% | 2511 | 30% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2226 | 35 | 288 | 49% | 2242 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2496 | 30 | 380 | 48% | 2515 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2388 | 37 | 252 | 52% | 2372 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2067 | 35 | 288 | 54% | 2026 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2256 | 36 | 264 | 49% | 2265 | 28% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2132 | 40 | 206 | 53% | 2110 | 33% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1800 | 43 | 180 | 51% | 1790 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2124 | 40 | 204 | 52% | 2107 | 31% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2022 | 46 | 164 | 51% | 2017 | 23% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1662 | 42 | 208 | 47% | 1688 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2071 | 38 | 260 | 46% | 2141 | 24% |
| 1.2.2 | LTC <sub>(60.0+0.60s)</sub> | 2005 | 43 | 204 | 46% | 2068 | 20% |
| 1.2.2 | STC <sub>(8.0+0.08s)</sub> | 1686 | 41 | 232 | 47% | 1743 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |