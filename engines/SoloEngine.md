# Engine: SoloEngine

Author: Yunus Emre Yıldız

Home: https://github.com/yunusemreyldz07/SoloEngine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-06-06 | 2846<sub>(+new) | 3121<sub>(+new) | 3227<sub>(+new) |  |
| 2.1.0 | 2026-04-14 |  |  |  |  |
| 2.0.0 | 2026-03-23 | 2265<sub>(+98) | 2606<sub>(+144) | 2749<sub>(+150) |  |
| 1.6.0 | 2026-03-14 | 2167<sub>(+150) | 2462<sub>(+135) | 2599<sub>(+162) |  |
| 1.5.0 | 2026-03-04 | 2017<sub>(+254) | 2327<sub>(+249) | 2437<sub>(+239) |  |
| 1.4.0 | 2026-02-07 | 1763<sub>(+134) | 2078<sub>(+103) | 2198<sub>(+128) |  |
| 1.3.1 | 2026-02-01 | 1629<sub>(-26) | 1975<sub>(+19) | 2070<sub>(+52) |  |
| 1.2.2 | 2026-01-23 | 1655 | 1956 | 2018 |  |
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

Generated: 2026-07-14 06:29:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0", "2.2.0"]
  y-axis "Elo Rating" 1600 --> 3300
  line "STC (8.0+0.08s)" [1655, 1629, 1763, 2017, 2167, 2265, 2846]
  line "STC (8.0+0.08s)" [1655, 1629, 1763, 2017, 2167, 2265, 2846]
  line "LTC (60.0+0.60s)" [1956, 1975, 2078, 2327, 2462, 2606, 3121]
  line "VLTC (2m24s+1.12s)" [2018, 2070, 2198, 2437, 2599, 2749, 3227]
  line "VLTC (2m24s+1.12s)" [2018, 2070, 2198, 2437, 2599, 2749, 3227]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.2", "1.3.1", "1.4.0", "1.5.0", "1.6.0", "2.0.0", "2.2.0"]
  y-axis "Elo Rating" 1600 --> 3300
  line "STC (8.0+0.08s)" [1655, 1629, 1763, 2017, 2167, 2265, 2846]
  line "STC (8.0+0.08s)" [1655, 1629, 1763, 2017, 2167, 2265, 2846]
  line "LTC (60.0+0.60s)" [1956, 1975, 2078, 2327, 2462, 2606, 3121]
  line "VLTC (2m24s+1.12s)" [2018, 2070, 2198, 2437, 2599, 2749, 3227]
  line "VLTC (2m24s+1.12s)" [2018, 2070, 2198, 2437, 2599, 2749, 3227]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3227 | 30 | 296 | 50% | 3221 | 64% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 3121 | 32 | 282 | 53% | 3089 | 53% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2846 | 30 | 346 | 51% | 2835 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2749 | 27 | 436 | 52% | 2731 | 32% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2606 | 31 | 328 | 49% | 2611 | 34% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2265 | 31 | 348 | 52% | 2248 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2599 | 34 | 280 | 50% | 2595 | 36% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2462 | 32 | 332 | 51% | 2450 | 30% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2167 | 35 | 288 | 49% | 2184 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2437 | 30 | 380 | 48% | 2456 | 28% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2327 | 37 | 252 | 52% | 2311 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2017 | 35 | 288 | 54% | 1976 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2198 | 36 | 264 | 49% | 2206 | 28% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2078 | 40 | 206 | 53% | 2056 | 33% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1763 | 43 | 180 | 51% | 1754 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2070 | 40 | 204 | 52% | 2055 | 31% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 1975 | 46 | 164 | 51% | 1970 | 23% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1629 | 42 | 208 | 47% | 1655 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2018 | 38 | 260 | 46% | 2088 | 24% |
| 1.2.2 | LTC <sub>(60.0+0.60s)</sub> | 1956 | 43 | 204 | 46% | 2020 | 20% |
| 1.2.2 | STC <sub>(8.0+0.08s)</sub> | 1655 | 41 | 232 | 47% | 1709 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |