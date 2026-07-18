# Engine: Basilisk

Author: Miloslav Macůrek

Home: https://github.com/maelic13/basilisk

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.8.0 | 2026-07-08 | 2503<sub>(-30) | 2774<sub>(+24) | 2908<sub>(+72) |  |
| 1.7.0 | 2026-06-29 | 2533<sub>(+177) | 2750<sub>(+126) | 2836<sub>(+75) |  |
| 1.6.0 | 2026-06-20 | 2356<sub>(+20) | 2624<sub>(+41) | 2761<sub>(+56) |  |
| 1.5.0 | 2026-06-10 | 2336<sub>(-4) | 2583<sub>(+15) | 2705<sub>(+35) |  |
| 1.4.9 | 2026-05-29 | 2340<sub>(+new) | 2568<sub>(+new) | 2670<sub>(+new) |  |
| 1.4.8 | 2026-05-28 |  |  |  |  |
| 1.4.7 | 2026-05-28 |  |  |  |  |
| 1.4.6 | 2026-05-28 |  |  |  |  |
| 1.4.5 | 2026-05-28 |  |  |  |  |
| 1.4.4 | 2026-05-28 |  |  |  |  |
| 1.4.3 | 2026-05-27 |  |  |  |  |
| 1.4.2 | 2026-05-26 |  |  |  |  |
| 1.4.1 | 2026-05-26 |  |  |  |  |
| 1.4.0 | 2026-05-25 |  |  |  |  |
| 1.3.0 | 2026-05-25 |  |  |  |  |
| 1.2.3 | 2026-05-24 |  |  |  |  |
| 1.2.2 | 2026-05-22 |  |  |  |  |
| 1.2.1 | 2026-05-22 |  |  |  |  |
| 1.2.0 | 2026-05-21 | 2036<sub>(+new) | 2373<sub>(+new) | 2444<sub>(+new) |  |
| 1.1.0 | 2026-05-21 |  |  |  |  |
| 1.0.0 | 2026-05-20 | 2028 | 2338 | 2452 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Basilisk+<version>&body=###%20Engine%20name%0ABasilisk%0A%0A###%20Version%0A1.8.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-18 06:22:58

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.2.0", "1.4.9", "1.5.0", "1.6.0", "1.7.0", "1.8.0"]
  y-axis "Elo Rating" 2000 --> 3000
  line "STC (8.0+0.08s)" [2028, 2036, 2340, 2336, 2356, 2533, 2503]
  line "STC (8.0+0.08s)" [2028, 2036, 2340, 2336, 2356, 2533, 2503]
  line "LTC (60.0+0.60s)" [2338, 2373, 2568, 2583, 2624, 2750, 2774]
  line "VLTC (2m24s+1.12s)" [2452, 2444, 2670, 2705, 2761, 2836, 2908]
  line "VLTC (2m24s+1.12s)" [2452, 2444, 2670, 2705, 2761, 2836, 2908]
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
  x-axis ["1.0.0", "1.2.0", "1.4.9", "1.5.0", "1.6.0", "1.7.0", "1.8.0"]
  y-axis "Elo Rating" 2000 --> 3000
  line "STC (8.0+0.08s)" [2028, 2036, 2340, 2336, 2356, 2533, 2503]
  line "STC (8.0+0.08s)" [2028, 2036, 2340, 2336, 2356, 2533, 2503]
  line "LTC (60.0+0.60s)" [2338, 2373, 2568, 2583, 2624, 2750, 2774]
  line "VLTC (2m24s+1.12s)" [2452, 2444, 2670, 2705, 2761, 2836, 2908]
  line "VLTC (2m24s+1.12s)" [2452, 2444, 2670, 2705, 2761, 2836, 2908]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2908 | 45 | 148 | 51% | 2903 | 41% |
| 1.8.0 | LTC <sub>(60.0+0.60s)</sub> | 2774 | 45 | 156 | 51% | 2768 | 32% |
| 1.8.0 | STC <sub>(8.0+0.08s)</sub> | 2503 | 45 | 160 | 50% | 2503 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2836 | 45 | 148 | 48% | 2854 | 43% |
| 1.7.0 | LTC <sub>(60.0+0.60s)</sub> | 2750 | 45 | 156 | 48% | 2769 | 33% |
| 1.7.0 | STC <sub>(8.0+0.08s)</sub> | 2533 | 45 | 170 | 51% | 2519 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2761 | 48 | 132 | 53% | 2738 | 37% |
| 1.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2624 | 54 | 112 | 48% | 2639 | 29% |
| 1.6.0 | STC <sub>(8.0+0.08s)</sub> | 2356 | 50 | 126 | 52% | 2342 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2705 | 34 | 284 | 52% | 2687 | 31% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2583 | 36 | 258 | 50% | 2580 | 25% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 2336 | 36 | 278 | 51% | 2326 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2670 | 58 | 100 | 51% | 2662 | 26% |
| 1.4.9 | LTC <sub>(60.0+0.60s)</sub> | 2568 | 57 | 102 | 49% | 2581 | 25% |
| 1.4.9 | STC <sub>(8.0+0.08s)</sub> | 2340 | 64 | 86 | 53% | 2310 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2444 | 37 | 246 | 51% | 2437 | 27% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2373 | 37 | 244 | 51% | 2364 | 25% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2036 | 39 | 236 | 51% | 2026 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2452 | 48 | 154 | 49% | 2457 | 19% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2338 | 45 | 180 | 56% | 2257 | 21% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2028 | 50 | 152 | 57% | 1940 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |